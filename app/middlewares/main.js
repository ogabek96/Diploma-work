"use strict";

exports.index = (req, res, next) => {
  res.set(`Access-Control-Allow-Origin`, `*`);
  res.set(`Access-Control-Allow-Methods`, `PUT`);
  res.set(`Access-Control-Allow-Headers`, `Authorization, content-type`);
  // setTimeout(() => {
  //   next();
  // }, 500);
  next();
};
