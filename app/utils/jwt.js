"use strict";
const jwt = require(`jsonwebtoken`);
const KEY = `<K55JHGJKYHhbeheiujdmc[poi`;

exports.sign = obj => {
  return jwt.sign(obj, KEY);
};

exports.verify = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, KEY, function (err, decoded) {
      if (!err) {
        resolve(decoded);
      } else {
        reject(err);
      }
    });
  });
};
