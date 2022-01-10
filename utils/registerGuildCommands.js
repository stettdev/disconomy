const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Discord } = require('../config/env');
const Commands = require('../commands');

(async () => {
  // Get commands from 'commands' folder
  const commands = [];
  Commands.forEach((command) => {
    commands.push(command.data.toJSON());
  });

  // Set up Discord REST
  const rest = new REST({ version: 9 }).setToken(Discord.token);

  // Register commands
  try {
    console.info('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(Discord.appId, Discord.testGuild),
      { body: commands },
    );

    console.info('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
