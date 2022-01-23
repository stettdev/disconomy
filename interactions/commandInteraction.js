const respond = async (interaction) => {
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) return;

  await interaction.deferReply({ ephemeral: true });

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.editReply({ content: 'There was an error while executing this command!' });
  }
};

module.exports = { respond };
