"use strict";
const express = require(`express`);
const auth = require(`../app/controllers/auth`);

const router = express.Router();

router.post(`/token`, (req, res) => {
  auth.token(req, res);
});


module.exports = router;
