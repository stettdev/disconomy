const baseEmbed = require('./baseEmbed');

const errorEmbed = (message) => baseEmbed(message).setColor('DARK_ORANGE');

module.exports = errorEmbed;
