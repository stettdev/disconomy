const express = require('express');
const cors = require('cors');
const { API } = require('./config/env');
const mainRouter = require('./routes/main');

const app = express();
app.use(cors({
  origin: 'http://localhost',
}));

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use('/', mainRouter);

app.listen(API.port, () => {
  console.info(`Listening at http://localhost:${API.port}`);
});
