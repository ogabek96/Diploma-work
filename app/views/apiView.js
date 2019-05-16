"use strict";
exports.success = (title, message, payload) => {
  return {
    title,
    code: 200,
    message,
    payload: JSON.stringify(payload)
  };
};
