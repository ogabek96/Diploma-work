'use strict';
const Op = require(`sequelize`).Op;

const Patient = require(`../models`).Patient;

const apiView = require(`../views/api-view`);

exports.create = async (req, res) => {
  const newPatient = req.body;
  Patient.create(newPatient)
  .then(patient => {
    return res.status(200).send(apiView.success(`OK`, `Patient`, { patient }));
  });
};

exports.getAll = async (req, res) => {
  return Patient.findAll()
  .then(patients => {
    return res.status(200).send(apiView.success(`OK`, `Patients`, { patients }));
  });
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  return Patient.findOne({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(patient => {
    return res.status(200).send(apiView.success(`OK`, `Patient`, { patient }));
  });
};

exports.update = async (req, res) => {
  console.log("update");
  const patientReq = req.body;
  return Patient.findOne({
    where: {
      id: {
        [Op.eq]: patientReq.id
      }
    }
  })
  .then(patient => {
    return patient.update(patientReq)
    .then(updatedPatient => {
      return res.status(200).send(apiView.success(`OK`, `Patient`, { patient: updatedPatient }));
    });
  });
};
