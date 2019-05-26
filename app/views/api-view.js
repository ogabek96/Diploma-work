"use strict";
exports.success = (title, message, payload) => {
  return {
    title,
    code: 200,
    message,
    payload
  };
};
exports.error = (title, code, message) => {
  return {
    title,
    code,
    message,
    payload: {}
  };
};
