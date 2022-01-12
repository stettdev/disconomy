const { MessageEmbed } = require('discord.js');

const baseEmbed = (message) => new MessageEmbed()
  .setDescription(message);

module.exports = baseEmbed;
