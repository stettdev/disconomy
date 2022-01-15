const baseEmbed = require('./baseEmbed');

const errorEmbed = (message) => baseEmbed(message).setColor('DARK_RED');

module.exports = errorEmbed;
