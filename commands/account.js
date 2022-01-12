const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const requirePerson = require('../modules/requirePerson');
const { Account, Person } = require('../database');

const getAccount = async (ownerId) => Account.findOne({ where: { ownerId } });

const balance = {
  data: new SlashCommandSubcommandBuilder()
    .setName('balance')
    .setDescription('Check amount of money in the account.'),
  async execute(person) {
    // Get account's balance
    const account = await getAccount(person.id);
    return account ? `Account balance: ${account.balance}` : 'Account not found';
  },
};

const open = {
  data: new SlashCommandSubcommandBuilder()
    .setName('open')
    .setDescription('Open a new account.'),
  async execute(person) {
    // Create account
    const account = await Account.create({ ownerId: person.id });
    return account ? 'Account successfully opened.' : 'Cannot open a new account.';
  },
};

const close = {
  data: new SlashCommandSubcommandBuilder()
    .setName('close')
    .setDescription('Close your existing account.'),
  async execute(person) {
    // Destroy account
    await Account.destroy({ where: { ownerId: person.id } });
    return 'Account successfully closed';
  },
};

const deposit = {
  data: new SlashCommandSubcommandBuilder()
    .setName('deposit')
    .setDescription('Transfer money to your account.')
    .addIntegerOption((option) => option.setName('amount').setDescription('Amount to deposit').setRequired(true)),
  async execute(person, options) {
    // Get person's account
    const account = await getAccount(person.id);
    if (!account) return 'No account';

    // Get amount
    const amount = options.getInteger('amount');
    if (amount === 0) return 'No transfer necessary.';
    if (person.money < amount) return 'Not enough money to deposit.';

    // Deposit
    account.balance += amount;
    person.money -= amount;

    // Preserve
    account.save();
    person.save();

    return 'Money has been transfered';
  },
};

const withdraw = {
  data: new SlashCommandSubcommandBuilder()
    .setName('withdraw')
    .setDescription('Take money from your account.')
    .addIntegerOption((option) => option.setName('amount').setDescription('Amount to withdraw').setRequired(true)),
  async execute(person, options) {
    // Get person's account
    const account = await getAccount(person.id);
    if (!account) return 'No account';

    // Get amount
    const amount = options.getInteger('amount');
    if (amount === 0) return 'No transfer necessary.';
    if (account.balance < amount) return 'Provided sum exceeds your account balance.';

    // Withdraw
    account.balance -= amount;
    person.money += amount;

    // Preserve
    account.save();
    person.save();

    return 'Money has been transfered';
  },
};

const transfer = {
  data: new SlashCommandSubcommandBuilder()
    .setName('transfer')
    .setDescription('Send money to other player.')
    .addMentionableOption((option) => option.setName('recipient').setDescription('Player who will receive money').setRequired(true))
    .addIntegerOption((option) => option.setName('amount').setDescription('Amount to withdraw').setRequired(true)),
  async execute(person, options) {
    // Get person's account
    const account = await getAccount(person.id);
    if (!account) return 'No account';

    // Get amount
    const amount = options.getInteger('amount');
    if (amount === 0) return 'No transfer necessary.'; // Zero sum transfer
    if (account.balance < amount) return 'Provided sum exceeds your account balance.';

    // Get recipient
    const mention = options.getMentionable('recipient');
    if (mention.constructor.name !== 'GuildMember') return 'Recipient is not a valid user.';
    const recipient = await Person.findOne({
      where: {
        guildId: mention.guild.id,
        userId: mention.id,
      },
    });
    if (recipient === person) return 'No transfer necessary.'; // Transfer to yourself

    // Get recipient account
    const recipientAccount = await getAccount(recipient.id);
    if (!recipientAccount) return 'Recipient does not have an account.';

    // Transfer
    account.balance -= amount;
    recipientAccount.balance += amount;

    // Preserve
    account.save();
    recipientAccount.save();

    return 'Money has been transfered';
  },
};

// Registered subcommands
const subcommands = [balance, open, close, deposit, withdraw, transfer];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('account')
    .setDescription('BANK ACCOUNT')
    .addSubcommand(balance.data)
    .addSubcommand(close.data)
    .addSubcommand(open.data)
    .addSubcommand(deposit.data)
    .addSubcommand(withdraw.data)
    .addSubcommand(transfer.data),
  async execute(interaction) {
    // Get person calling the command
    const person = await requirePerson(interaction.guildId, interaction.user.id);

    // Get subcommand from registered
    const subcommand = subcommands.find(
      (command) => command.data.name === interaction.options.getSubcommand(),
    );
    // Execute subcommand or return error message
    const message = subcommand ? await subcommand.execute(person, interaction.options) : 'Subcommand not found.';

    // Respond
    return interaction.editReply(message);
  },
};
