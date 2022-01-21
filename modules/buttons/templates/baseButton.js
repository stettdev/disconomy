const { MessageButton } = require('discord.js');

module.exports = (id, label) => new MessageButton().setCustomId(id).setLabel(`${label}`);
