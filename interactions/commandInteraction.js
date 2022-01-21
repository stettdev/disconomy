const Embeds = require('../modules/embeds');

const respond = async (interaction) => {
  // Get command
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) return;

  // Delay response
  await interaction.deferReply({ ephemeral: command.privateResults });

  // Execute command and deal with generic errors within
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.editReply({ embeds: [Embeds.Templates.errorEmbed('There was an error while executing this command.')] });
  }
};

module.exports = {
  respond,
};
