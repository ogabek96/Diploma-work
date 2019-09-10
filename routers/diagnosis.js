"use strict";
const express = require(`express`);
const diagnosis = require(`../app/controllers/diagnosis`);

const router = express.Router();

router.get(`/`, (req, res) => {
  diagnosis.getAll(req, res);
});

router.post(`/`, (req, res) => {
  diagnosis.create(req, res);
});

router.get(`/:id`, (req, res) => {
  diagnosis.getById(req, res);
});

router.put(`/:id`, (req, res) => {
  diagnosis.update(req, res);
});

router.delete(`/:id`, (req, res) => {
  diagnosis.delete(req, res);
});

module.exports = router;
