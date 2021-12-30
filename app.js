const { Client, Intents, Collection } = require('discord.js');
const { Discord } = require('./config/env');
const Events = require('./events');
const Commands = require('./commands');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

Events.forEach((event) => {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

Commands.forEach((command) => {
  client.commands.set(command.data.name, command);
});

client.login(Discord.token);
