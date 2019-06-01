'use strict';
const Op = require(`sequelize`).Op;
const Patient = require(`../models`).patient;
const FirstEvaluation = require(`../models`).firstEvaluation;

const apiView = require(`../views/api-view`);

exports.create = async (req, res) => {
  const newFirstEvaluation = req.body;
  const patientId = req.query.patientId;
  Patient.findByPk(patientId)
  .then(patient => {
    if (patient) {
      patient.createFirstEvaluation(newFirstEvaluation)
      .then(firstEvaluation => {
        return res.status(200).send(apiView.success(`OK`, `First evaluation`, { firstEvaluation }));
      });
    }
  });
  // FirstEvaluation.create(newFirstEvaluation)
  // .then(firstEvaluation => {
  //   return res.status(200).send(apiView.success(`OK`, `First evaluation`, { firstEvaluation }));
  // });
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

exports.delete = async (req, res) => {
  const id = req.params.id;
  return Patient.destroy({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(deletedPatient => {
    return res.status(200).send(apiView.success(`OK`, `Patient`, { }));
  });
};
