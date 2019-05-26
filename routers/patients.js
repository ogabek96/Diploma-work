"use strict";
const express = require(`express`);
const patients = require(`../app/controllers/patients`);

const router = express.Router();

router.get(`/`, (req, res) => {
  patients.getAll(req, res);
});

router.post(`/`, (req, res) => {
  patients.create(req, res);
});

router.get(`/:id`, (req, res) => {
  patients.getById(req, res);
});

router.put(`/:id`, (req, res) => {
  patients.update(req, res);
});

module.exports = router;
