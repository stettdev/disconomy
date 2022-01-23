const { SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const Embeds = require('../../modules/embeds');

module.exports = {
  data: new SlashCommandSubcommandBuilder()
    .setName('close')
    .setDescription('Close bank account'),
  execute: (interaction) => {
    const balance = 0;
    return Embeds.Templates.infoEmbed(`CLOSE: ${balance}`);
  },
};
