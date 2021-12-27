module.exports = {
  name: 'interactionCreate',
  once: false,
  execute: (interaction) => {
    console.info(`New interaction: ${interaction.user.tag} in #${interaction.channel.name}`);
  },
};
