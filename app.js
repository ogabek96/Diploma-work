'use strict';

const express = require(`express`);
const bodyParser = require(`body-parser`);

const commonRouter = require(`./routers/common`);
const authRouter = require(`./routers/auth`);
const patientsRouter = require(`./routers/patients`);

const middleware = require(`./app/middlewares/main`);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  middleware.index(req, res, next);
});

app.use(`/patients`, patientsRouter);

app.use(`/common`, commonRouter);

app.use(`/auth`, authRouter);

app.listen(3000, () => {
  console.log(`Server is started...`);
});
