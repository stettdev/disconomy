const { MessageEmbed } = require('discord.js');

const baseEmbed = (message) => new MessageEmbed()
  .setDescription(message)
  .setFooter('Disconomy Bot');

module.exports = baseEmbed;
