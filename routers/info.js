"use strict";
const express = require(`express`);
const info = require(`../app/controllers/info`);
// const middleware = require('../app/middlewares/main');
const router = express.Router();

router.get(`/getProvinces`, (req, res) => {
  info.getProvinces(req, res);
});

router.get(`/getNationalities`, (req, res) => {
  info.getNationalities(req, res);
});


module.exports = router;
