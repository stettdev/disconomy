const commandInteraction = require('../../interactions/commandInteraction');
const buttonInteraction = require('../../interactions/buttonInteraction');

module.exports = {
  name: 'interactionCreate',
  once: false,
  execute: async (interaction) => {
    if (interaction.isCommand()) commandInteraction.respond(interaction);
    else if (interaction.isButton()) buttonInteraction.respond(interaction);
  },
};
