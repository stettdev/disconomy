const Embeds = require('../modules/embeds');

const respond = async (interaction) => {
  const button = interaction.client.buttons.get(interaction.customId);
  if (!button) return;

  await interaction.deferReply({ ephemeral: button.privateResults });

  // Execute command and deal with generic errors within
  try {
    await button.onClick(interaction);
  } catch (error) {
    console.error(error);
    await interaction.editReply({ embeds: [Embeds.Templates.errorEmbed('There was an error while responding to this interaction.')] });
  }
};

module.exports = {
  respond,
};
