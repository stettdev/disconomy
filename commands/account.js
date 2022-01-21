const { MessageActionRow } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Embeds = require('../modules/embeds');
const Buttons = require('../buttons');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('account')
    .setDescription('Open bank account menu'),
  privateResults: true,
  async execute(interaction) {
    // Q: Do we need to know user right now?
    // const guild = interaction.guildId;
    // const user = interaction.user.id;

    // Create bank Account menu
    const message = Embeds.Templates.infoEmbed('HELLO');
    const buttons = new MessageActionRow().addComponents(Buttons.checkBalanceButton.button);

    return interaction.editReply({ embeds: [message], components: [buttons] });
  },
};
