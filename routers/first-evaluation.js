"use strict";
const express = require(`express`);
const firstEvaluation = require(`../app/controllers/first-evaluation`);

const router = express.Router();

router.get(`/`, (req, res) => {
  firstEvaluation.getAll(req, res);
});

router.post(`/`, (req, res) => {
  firstEvaluation.create(req, res);
});

router.get(`/:id`, (req, res) => {
  firstEvaluation.getById(req, res);
});

router.put(`/:id`, (req, res) => {
  firstEvaluation.update(req, res);
});

router.delete(`/:id`, (req, res) => {
  firstEvaluation.delete(req, res);
});

module.exports = router;
