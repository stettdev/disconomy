const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Discord } = require('../config/env');
const Commands = require('../commands');

(async () => {
  const commands = [];

  Commands.forEach((command) => {
    commands.push(command.data.toJSON());
  });

  const rest = new REST({ version: 9 }).setToken(Discord.token);

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
