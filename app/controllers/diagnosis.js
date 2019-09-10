'use strict';
const Op = require(`sequelize`).Op;
const Patient = require(`../models`).patient;
const Diagnosis = require(`../models`).diagnosis;
const apiView = require(`../views/api-view`);

exports.create = async (req, res) => {
  const newDiagnosis = req.body;
  const patientId = req.query.patientId;
  Patient.findByPk(patientId)
  .then(patient => {
    if (patient) {
      patient.createDiagnosis(newDiagnosis)
      .then(diagnosis => {
        return res.status(200).send(apiView.success(`OK`, `diagnosis`, { diagnosis }));
      });
    }
  });
};

exports.getAll = async (req, res) => {
  const patientId = req.query.patientId;
  return Patient.findByPk(patientId)
  .then(patient => {
    if (patient) {
      patient.getDiagnoses()
      .then(diagnosis => {
        return res.status(200).send(apiView.success(`OK`, `diagnosis`, { diagnosis }));
      });
    }
  });
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  return Diagnosis.findOne({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(diagnosis => {
    return res.status(200).send(apiView.success(`OK`, `diagnosis`, { diagnosis }));
  });
};

exports.update = async (req, res) => {
  const diagnosisReq = req.body;
  return Diagnosis.findOne({
    where: {
      id: {
        [Op.eq]: diagnosisReq.id
      }
    }
  })
  .then(diagnosis => {
    return diagnosis.update(diagnosisReq)
    .then(updatedDiagnosis => {
      return res.status(200).send(apiView.success(`OK`, `First Evaluation`, { diagnosis: updatedDiagnosis }));
    });
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  return Diagnosis.destroy({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(() => {
    return res.status(200).send(apiView.success(`OK`, `diagnosis`, { }));
  });
};
