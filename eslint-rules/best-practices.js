'use strict';

module.exports = {
  rules: {
    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    'guard-for-in': `error`,
    'max-nested-callbacks': [`error`, { max: 3 }],
    'no-caller': `error`,
    'no-extend-native': `error`,
    'no-extra-bind': `error`,
    'no-invalid-this': `error`,
    'no-multi-spaces': `error`,
    'no-multi-str': `error`,
    'no-new-wrappers': `error`,
    'no-throw-literal': `error`, // eslint:recommended
    'no-with': `error`,
    'consistent-return': `error`,
    'curly': [`error`, `all`],
    'eqeqeq': `error`,
    'no-alert': `error`,
    'no-eval': `error`,
    'no-fallthrough': `error`,
    'no-floating-decimal': `error`,
    'no-implied-eval': `error`,
    'no-iterator': `error`,
    'no-labels': `error`,
    'no-lone-blocks': `error`,
    'no-global-assign': `error`,
    'no-new': `error`,
    'no-new-func': `error`,
    'no-octal': `error`, // default
    'no-octal-escape': `error`,
    'no-proto': `error`,
    'no-redeclare': `error`, // default
    'no-return-assign': `error`,
    'no-script-url': `error`,
    'no-sequences': `error`,
    'no-unused-expressions': `error`,
    'radix': `error`
  }
};
