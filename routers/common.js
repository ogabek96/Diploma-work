"use strict";
const express = require(`express`);
const common = require(`../app/controllers/common`);

const router = express.Router();

router.get(`/provinces`, (req, res) => {
  common.getProvinces(req, res);
});

router.get(`/nationalities`, (req, res) => {
  common.getNationalities(req, res);
});


module.exports = router;
