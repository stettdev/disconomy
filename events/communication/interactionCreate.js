const commandInteraction = require('../../interactions/commandInteraction');

module.exports = {
  name: 'interactionCreate',
  once: false,
  execute: async (interaction) => {
    if (interaction.isCommand()) await commandInteraction.respond(interaction);
  },
};
