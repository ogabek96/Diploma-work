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
};

exports.getAll = async (req, res) => {
  const patientId = req.query.patientId;
  return Patient.findByPk(patientId)
  .then(patient => {
    if (patient) {
      patient.getFirstEvaluations()
      .then(firstEvaluation => {
        return res.status(200).send(apiView.success(`OK`, `First evaluation`, { firstEvaluation }));
      });
    }
  });
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  return FirstEvaluation.findOne({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(firstEvaluation => {
    return res.status(200).send(apiView.success(`OK`, `First Evaluation`, { firstEvaluation }));
  });
};

exports.update = async (req, res) => {
  const firstEvaluationReq = req.body;
  return FirstEvaluation.findOne({
    where: {
      id: {
        [Op.eq]: firstEvaluationReq.id
      }
    }
  })
  .then(firstEvaluation => {
    return firstEvaluation.update(firstEvaluationReq)
    .then(updatedfirstEvaluation => {
      return res.status(200).send(apiView.success(`OK`, `First Evaluation`, { firstEvaluation: updatedfirstEvaluation }));
    });
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  return FirstEvaluation.destroy({
    where: {
      id: {
        [Op.eq]: id
      }
    }
  })
  .then(() => {
    return res.status(200).send(apiView.success(`OK`, `First Evaluation`, { }));
  });
};
