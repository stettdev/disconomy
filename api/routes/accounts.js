const express = require('express');
const { Account, Person } = require('../database');

const router = express.Router();
const getAccount = async (ownerId) => Account.findOne({ where: { ownerId } });
const getPerson = async (guildId, userId) => Person.findOne({ where: { guildId, userId } });

// router.use((req, res, next) => {
//   const { guildId, userId } = req.params;
//   if (!guildId || !userId) {
//     res.status(400).send({ message: 'Incomplete parameters' });
//   } else next();
// });

router.get('/', (req, res) => {
  res.status(200).send('WOOOOO!');
});

router.get('/:guildId.:userId/balance', async (req, res) => {
  const { guildId, userId } = req.params;
  const person = await getPerson(guildId, userId);
  const account = await getAccount(person.id);
  res.status(200).send({ balance: account.balance });
});

module.exports = router;
