const Client = require('./client');
const Guilds = require('./guilds');
const Communication = require('./communication');

const events = [];

[Client, Guilds, Communication].forEach(
  (controller) => controller.forEach(
    (event) => events.push(event),
  ),
);

module.exports = events;
