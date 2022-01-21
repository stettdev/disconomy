const { MessageEmbed } = require('discord.js');

module.exports = (message) => new MessageEmbed()
  .setDescription(message)
  .setFooter({ text: 'Disconomy Bot' });
