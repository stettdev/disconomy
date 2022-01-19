const baseEmbed = require('./baseEmbed');

const infoEmbed = (message) => baseEmbed(message).setColor('DARK_BLUE');

module.exports = infoEmbed;
