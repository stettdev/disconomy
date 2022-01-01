module.exports = {
  name: 'interactionCreate',
  once: false,
  execute: async (interaction) => {
    if (!interaction.isCommand) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    await interaction.deferReply();

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.editReply({ content: 'There was an error while executing this command.', ephemeral: true });
    }
  },
};
