'use strict';

const express = require(`express`);
const bodyParser = require(`body-parser`);

const commonRouter = require(`./routers/common`);
const authRouter = require(`./routers/auth`);

const patientsRouter = require(`./routers/patients`);
const firstEvaluationRouter = require(`./routers/first-evaluation`);
const anamnesticRouter = require(`./routers/anamnestic`);
const diagnosisRouter = require(`./routers/diagnosis`);
const middleware = require(`./app/middlewares/main`);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  middleware.index(req, res, next);
});

app.use(`/patients`, patientsRouter);

app.use(`/first-evaluation`, firstEvaluationRouter);

app.use(`/anamnestic`, anamnesticRouter);

app.use(`/diagnosis`, diagnosisRouter);

app.use(`/common`, commonRouter);

app.use(`/auth`, authRouter);

app.listen(3000, () => {
  console.log(`Server is started...`);
});
