'use strict';
const Op = require(`sequelize`).Op;
const Patient = require(`../models`).patient;
const Anamnestic = require(`../models`).anamnestic;
const apiView = require(`../views/api-view`);

exports.create = async (req, res) => {
  const newAnamnestic = req.body;
  const patientId = req.query.patientId;
  Patient.findByPk(patientId)
  .then(patient => {
    if (patient) {
      patient.createAnamnestic(newAnamnestic)
      .then(anamnestic => {
        return res.status(200).send(apiView.success(`OK`, `anamnestic`, { anamnestic }));
      });
    }
  });
};

exports.getAll = async (req, res) => {
  const patientId = req.query.patientId;
  return Patient.findByPk(patientId)
  .then(patient => {
    if (patient) {
      patient.getAnamnestics()
      .then(anamnestic => {
        return res.status(200).send(apiView.success(`OK`, `anamnestic`, { anamnestic }));
      });
    }
  });
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  return Anamnestic.findOne({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(anamnestic => {
    return res.status(200).send(apiView.success(`OK`, `anamnestic`, { anamnestic }));
  });
};

exports.update = async (req, res) => {
  const anamnesticReq = req.body;
  return Anamnestic.findOne({
    where: {
      id: {
        [Op.eq]: anamnesticReq.id
      }
    }
  })
  .then(anamnestic => {
    return anamnestic.update(anamnesticReq)
    .then(updatedAnamnestic => {
      return res.status(200).send(apiView.success(`OK`, `anamnestic`, { anamnestic: updatedAnamnestic }));
    });
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  return Anamnestic.destroy({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(() => {
    return res.status(200).send(apiView.success(`OK`, `anamnestic`, { }));
  });
};
