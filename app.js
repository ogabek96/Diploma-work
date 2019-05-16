'use strict';

const express = require(`express`);
const bodyParser = require(`body-parser`);

const regRouter = require(`./routers/reg`);
const infoRouter = require(`./routers/info`);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/reg`, regRouter);

app.use(`/info`, infoRouter);

app.listen(3000, () => {
  console.log(`Server is started...`);
});
