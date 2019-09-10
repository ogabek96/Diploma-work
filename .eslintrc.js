module.exports = {
    "extends": ["./eslint-rules/node.js"],
    "env": {
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "ecmaVersion": 2018
    },
    "rules": {
      "block-scoped-var": "error",
      "max-depth": ["warn", 3],
      "max-len": ["warn", 120],
      "max-lines": ["warn", {"max": 300, "skipBlankLines": true, "skipComments": true}],
      "max-statements": ["warn", 15],
      "no-use-before-define": ["error", "nofunc"]
    }
};