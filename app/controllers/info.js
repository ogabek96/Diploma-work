'use strict';
const Nationality = require('../models').nationality;
const Province = require('../models').province;

exports.index = async(req, res) =>  {

        let nationalities = await Nationality.findAll().then(nats => {
            return nats.map(nat => ({'code': nat.code, 'name': nat.name}));
        });
        let provinces = await Province.findAll().then(provs => {
            return provs.map(prov => ({'code': prov.code, 'name': prov.name}));
        });
      
        return res.render('index',{
            nationalities: nationalities,
            provinces: provinces
        });
}

exports.create = (req, res) => {
    res.status(200).send(JSON.stringify(req.body));
}