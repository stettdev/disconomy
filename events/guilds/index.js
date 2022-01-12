const guildCreate = require('./guildCreate');
const guildDelete = require('./guildDelete');
const guildUnavailable = require('./guildUnavailable');
const guildMemberAdd = require('./guildMemberAdd');

module.exports = [
  guildCreate,
  guildDelete,
  guildUnavailable,
  guildMemberAdd,
];
