const express = require('express');
const reg = require('../app/controllers/reg');
//const middleware = require('../app/middlewares/main');
const router = express.Router();

router.get('/', (req, res) => {
     reg.index(req, res);
});

router.post('/', (req, res) => {
     reg.create(req, res);
})

module.exports = router;