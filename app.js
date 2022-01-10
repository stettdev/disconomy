const { Client, Intents, Collection } = require('discord.js');
const { Discord } = require('./config/env');
const Events = require('./events');
const Commands = require('./commands');

// Create Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

// Set up event handling
Events.forEach((event) => {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

// Set up commands handling
Commands.forEach((command) => {
  client.commands.set(command.data.name, command);
});

// Login bot
client.login(Discord.token);
