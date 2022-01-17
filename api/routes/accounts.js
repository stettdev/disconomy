const express = require('express');
const { Account } = require('../database');
const requirePerson = require('../modules/requirePerson');

const router = express.Router();
const getAccount = async (ownerId) => Account.findOne({ where: { ownerId } });
// const getPerson = async (guildId, userId) => Person.findOne({ where: { guildId, userId } });

const hasOnlyDigits = (input) => !input.match(/\D+/g);

router.get('/', (req, res) => {
  res.status(200).send('WOOOOO!');
});

router.get('/:guildId.:userId/balance', async (req, res) => {
  const { guildId, userId } = req.params;

  const errors = [];
  if (!guildId) {
    errors.push('guildId has not been found');
  } else if (!hasOnlyDigits(guildId)) {
    errors.push('found non-digit characters in guildId');
  }

  if (!userId) {
    errors.push('userId has not been found');
  } else if (!hasOnlyDigits(userId)) {
    errors.push('found non-digit characters in userId');
  }

  if (errors.length > 0) {
    return res.status(400).send({ message: `Incomplete request: ${errors.join(', ')}` });
  }

  const person = await requirePerson(guildId, userId);
  const account = await getAccount(person.id);
  if (!account) {
    return res.status(404).send({ message: 'Account not found' });
  }
  return res.status(200).send({ balance: account.balance });
});

module.exports = router;
