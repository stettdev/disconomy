const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const { getPerson } = require('../middleware/checkPerson');
const accounts = require('../services/accountCrudService');

const balance = {
  data: new SlashCommandSubcommandBuilder()
    .setName('balance')
    .setDescription('Check amount of money in the account.'),
  async execute(personId) {
    let account;
    try {
      account = await accounts.get(personId);
    } catch (error) {
      console.error(error);
      return 'There was an error while surveying your account.';
    }

    return account.balance;
  },
};

const open = {
  data: new SlashCommandSubcommandBuilder()
    .setName('open')
    .setDescription('Open a new account.'),
  async execute(personId) {
    let account;
    try {
      account = await accounts.register(personId);
    } catch (error) {
      console.error(error);
      return 'There was an error while opening your account.';
    }

    return account ? 'Account successfully opened.' : 'Cannot open a new account.';
  },
};

const close = {
  data: new SlashCommandSubcommandBuilder()
    .setName('close')
    .setDescription('Close your existing account.'),
  async execute(personId) {
    try {
      await accounts.deregister(personId);
    } catch (error) {
      console.error(error);
      return 'There was an error while closing your account.';
    }

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
    interaction.deferReply();

    const userData = { guildId: interaction.guild.id, userId: interaction.user.id };
    const person = getPerson(userData);

    const subcommand = subcommands.find(
      (command) => command.data.name === interaction.options.getSubcommand(),
    );

    const message = await subcommand.execute(person.id);

    interaction.reply(message);
  },
};
