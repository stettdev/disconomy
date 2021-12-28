const { Client, Intents } = require('discord.js');
const { Discord } = require('./config/env');
const Events = require('./events');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

Events.forEach((event) => {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

client.login(Discord.token);
