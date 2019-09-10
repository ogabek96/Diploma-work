"use strict";
const express = require(`express`);
const anamnestic = require(`../app/controllers/anamnestic`);

const router = express.Router();

router.get(`/`, (req, res) => {
  anamnestic.getAll(req, res);
});

router.post(`/`, (req, res) => {
  anamnestic.create(req, res);
});

router.get(`/:id`, (req, res) => {
  anamnestic.getById(req, res);
});

router.put(`/:id`, (req, res) => {
  anamnestic.update(req, res);
});

router.delete(`/:id`, (req, res) => {
  anamnestic.delete(req, res);
});

module.exports = router;
