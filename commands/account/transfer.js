const { SlashCommandSubcommandBuilder, SlashCommandIntegerOption, SlashCommandMentionableOption } = require('@discordjs/builders');
const Embeds = require('../../modules/embeds');

const amount = new SlashCommandIntegerOption()
  .setName('amount')
  .setDescription('Sum to withdraw')
  .setRequired(true);

const recipient = new SlashCommandMentionableOption()
  .setName('recipient')
  .setDescription('User who shall receive your money')
  .setRequired(true);

module.exports = {
  data: new SlashCommandSubcommandBuilder()
    .setName('transfer')
    .setDescription('Send money to anothe user\'s bank account')
    .addIntegerOption(amount)
    .addMentionableOption(recipient),
  execute: (interaction) => {
    const balance = 0;
    return Embeds.Templates.infoEmbed(`TRANSFER: ${balance}`);
  },
};
