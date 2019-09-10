'use strict';
const Nationality = require(`../models`).nationality;
const Province = require(`../models`).province;

const apiView = require(`../views/api-view`);

exports.getProvinces = async (req, res) => {
  let provinces = await Province.findAll().then(provs => {
    return provs.map(prov => ({ 'code': prov.code, 'name': prov.name }));
  });
  return res.status(200).send(apiView.success(`OK`, `Provinces`, { provinces }));
};

exports.getNationalities = async (req, res) => {
  let nationalities = await Nationality.findAll().then(nats => {
    return nats.map(nat => ({ 'code': nat.code, 'name': nat.name }));
  });
  return res.status(200).send(apiView.success(`OK`, `Nationalities`, { nationalities }));
};
