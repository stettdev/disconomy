const { SlashCommandSubcommandBuilder, SlashCommandIntegerOption } = require('@discordjs/builders');
const Embeds = require('../../modules/embeds');

const amount = new SlashCommandIntegerOption()
  .setName('amount')
  .setDescription('Sum to withdraw')
  .setRequired(true);

module.exports = {
  data: new SlashCommandSubcommandBuilder()
    .setName('withdraw')
    .setDescription('Withdraw money from your bank account')
    .addIntegerOption(amount),
  execute: (interaction) => {
    const balance = 0;
    return Embeds.Templates.infoEmbed(`WITHDRAW: ${balance}`);
  },
};
