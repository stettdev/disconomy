const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const { getPerson } = require('../middleware/personChecks');
const { Account } = require('../database');

const balance = {
  data: new SlashCommandSubcommandBuilder()
    .setName('balance')
    .setDescription('Check amount of money in the account.'),
  async execute(personId) {
    const account = await Account.findOne({ where: { ownerId: personId } });
    return account ? `Account balance: ${account.balance}` : 'Account not found';
  },
};

const open = {
  data: new SlashCommandSubcommandBuilder()
    .setName('open')
    .setDescription('Open a new account.'),
  async execute(personId) {
    const account = await Account.create({ ownerId: personId });
    return account ? 'Account successfully opened.' : 'Cannot open a new account.';
  },
};

const close = {
  data: new SlashCommandSubcommandBuilder()
    .setName('close')
    .setDescription('Close your existing account.'),
  async execute(personId) {
    await Account.destroy({ where: { ownerId: personId } });
    return 'Account successfully closed';
  },
};

const subcommands = [balance, open, close];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('account')
    .setDescription('BANK ACCOUNT')
    .addSubcommand(balance.data)
    .addSubcommand(open.data)
    .addSubcommand(close.data),
  async execute(interaction) {
    const person = await getPerson(interaction.guildId, interaction.user.id);

    const subcommand = subcommands.find(
      (command) => command.data.name === interaction.options.getSubcommand(),
    );

    const message = await subcommand.execute(person.id);

    await interaction.editReply(message);
  },
};
