const { SlashCommandBuilder } = require('@discordjs/builders');
const open = require('./open');
const balance = require('./balance');
const close = require('./close');
const withdraw = require('./withdraw');
const deposit = require('./deposit');
const transfer = require('./transfer');

const subcommands = [open, close, balance, withdraw, deposit, transfer];

const command = new SlashCommandBuilder()
  .setName('account')
  .setDescription('Bank Account Commands');

subcommands.forEach((subcommand) => command.addSubcommand(subcommand.data));

module.exports = {
  data: command,
  privateResults: true,
  async execute(interaction) {
    const subcommand = subcommands.find(
      (sub) => sub.data.name === interaction.options.getSubcommand(),
    );

    if (subcommand) {
      const response = subcommand.execute(interaction);
      interaction.editReply({ embeds: [response] });
    }
  },
};
