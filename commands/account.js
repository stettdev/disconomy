const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const { API } = require('../config/env');
const Embeds = require('../modules/embeds');

const info = (message) => Embeds.Templates.infoEmbed(message);
const error = (message) => Embeds.Templates.errorEmbed(message);

const host = `http://localhost:${API.port}`;

const url = {
  getPersonId: (guildId, userId) => `${host}/people/${guildId}.${userId}`,
  getPersonalAccount: (personId) => `${host}/accounts/${personId}`,
};

const balance = {
  data: new SlashCommandSubcommandBuilder()
    .setName('balance')
    .setDescription('Check amount of money in the account.'),
  async execute(guildId, userId) {
    try {
      const person = await axios.get(url.getPersonId(guildId, userId));
      const account = await axios.get(url.getPersonalAccount(person.data.id));

      return info(`Account balance: ${account.data.balance}`);
    } catch (e) {
      console.error(e);
      return error(e.message);
    }
  },
};

const open = {
  data: new SlashCommandSubcommandBuilder()
    .setName('open')
    .setDescription('Open a new account.'),
  async execute() {
    return info('OPEN');
  },
};

const close = {
  data: new SlashCommandSubcommandBuilder()
    .setName('close')
    .setDescription('Close your existing account.'),
  async execute() {
    return info('CLOSET');
  },
};

const deposit = {
  data: new SlashCommandSubcommandBuilder()
    .setName('deposit')
    .setDescription('Transfer money to your account.')
    .addIntegerOption((option) => option.setName('amount').setDescription('Amount to deposit').setRequired(true)),
  async execute() {
    return info('DEPO');
  },
};

const withdraw = {
  data: new SlashCommandSubcommandBuilder()
    .setName('withdraw')
    .setDescription('Take money from your account.')
    .addIntegerOption((option) => option.setName('amount').setDescription('Amount to withdraw').setRequired(true)),
  async execute() {
    return info('DRAWED');
  },
};

const transfer = {
  data: new SlashCommandSubcommandBuilder()
    .setName('transfer')
    .setDescription('Send money to other player.')
    .addMentionableOption((option) => option.setName('recipient').setDescription('Player who will receive money').setRequired(true))
    .addIntegerOption((option) => option.setName('amount').setDescription('Amount to withdraw').setRequired(true)),
  async execute() {
    return info('TRANSPORT');
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
  privateResults: true,
  async execute(interaction) {
    // Get person calling the command
    const guild = interaction.guildId;
    const user = interaction.user.id;

    // Get subcommand from registered
    const subcommand = subcommands.find(
      (command) => command.data.name === interaction.options.getSubcommand(),
    );
    // Execute subcommand or return error message
    const message = subcommand ? await subcommand.execute(guild, user, interaction.options) : 'Subcommand not found.';

    // Respond
    return interaction.editReply({ embeds: [message] });
  },
};
