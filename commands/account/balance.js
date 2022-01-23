const { SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const Embeds = require('../../modules/embeds');

module.exports = {
  data: new SlashCommandSubcommandBuilder()
    .setName('balance')
    .setDescription('Check account balance'),
  execute: (interaction) => {
    const balance = 0;
    return Embeds.Templates.infoEmbed(`Balance: ${balance}`);
  },
};
