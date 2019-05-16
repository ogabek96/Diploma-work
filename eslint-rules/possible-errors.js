'use strict';

module.exports = {
  rules: {
    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-cond-assign': `error`, // eslint:recommended
    'no-irregular-whitespace': `error`, // eslint:recommended
    'no-unexpected-multiline': `error`, // eslint:recommended
    'valid-jsdoc': [`error`, {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: { returns: `return` }
    }],
    'no-console': `error`,
    'no-constant-condition': `error`,
    'no-control-regex': `error`,
    'no-debugger': `error`,
    'no-dupe-keys': `error`,
    'no-dupe-args': `error`,
    'no-duplicate-case': `error`,
    'no-empty': `error`,
    'no-empty-character-class': `error`,
    'no-ex-assign': `error`,
    'no-extra-boolean-cast': `error`,
    'no-extra-semi': `error`,
    'no-func-assign': `error`,
    'no-inner-declarations': [`error`, `functions`],
    'no-invalid-regexp': `error`,
    'no-unsafe-negation': `error`,
    'no-obj-calls': `error`,
    'no-regex-spaces': `error`,
    'no-sparse-arrays': `error`,
    'no-unreachable': `error`,
    'use-isnan': `error`,
    'valid-typeof': `error`
  }
};
