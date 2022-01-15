const express = require('express');
const cors = require('cors');
const { API } = require('./config/env');
const AccountsRouter = require('./routes/accounts');

const app = express();
app.use(cors({
  origin: 'http://localhost',
}));

app.use('/accounts', AccountsRouter);

app.listen(API.port, () => {
  console.info(`Listening at http://localhost:${API.port}`);
});
