"use strict";
const Op = require(`sequelize`).Op;
const bcrypt = require(`bcrypt`);
const jwtToken = require(`../utils/jwt`);

const User = require(`../models`).User;

const apiView = require(`../views/api-view`);

exports.token = (req, res) => {
  const username = req.body.username;
  User.findOne({
    where: {
      username: {
        [Op.eq]: username
      }
    }
  })
  .then(user => {

    if (user) {
      bcrypt.compare(req.body.password.toString(), user.password)
        .then(doesMatch => {
          if (doesMatch) {

            const token = jwtToken.sign({
              username: user.username,
              name: user.name,
              role: user.role
            });
            res.status(200).send(apiView.success(`OK`, `Sign in`, { token }));

          } else {
            res.status(400).send(apiView.error(`Error`, 1000, `Login or password don't match`));
          }
        });
    } else {
      res.status(400).send(apiView.error(`Error`, 1000, `Login or password don't match`));
    }

  });
};
