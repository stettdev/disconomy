module.exports = {
  name: 'interactionCreate',
  once: false,
  execute: async (interaction) => {
    // Commands only
    if (!interaction.isCommand) return;

    // Get command
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;

    // Allow delayed response
    await interaction.deferReply();

    // Execute command and deal with errors within
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.editReply({ content: 'There was an error while executing this command.', ephemeral: true });
    }
  },
};
