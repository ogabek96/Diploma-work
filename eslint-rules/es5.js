'use strict';

module.exports = {
  extends: [`./possible-errors.js`,
            `./best-practices.js`],
  rules: {
    // Strict mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    'strict': [`error`, `global`],

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    'no-unused-vars': [`error`, { args: `after-used`, argsIgnorePattern: `^_` }], // check that all args are used¬
    'no-delete-var': `error`, // eslint:recommended
    'no-label-var': `error`,
    'no-shadow': `error`,
    'no-shadow-restricted-names': `error`,
    'no-undef': `error`, // default
    'no-undef-init': `error`,
    'no-undefined': `off`, // https://github.com/htmlacademy/eslint-config-htmlacademy/issues/36

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    'no-process-exit': `error`,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'indent': [`error`, 2, {
      SwitchCase: 1,
      // continuation indent
      VariableDeclarator: `first`,
      MemberExpression: `off`, // https://github.com/htmlacademy/eslint-config-htmlacademy/issues/35
      FunctionDeclaration: { body: 1, parameters: `first` },
      FunctionExpression: { body: 1, parameters: `first` },
      CallExpression: { arguments: `first` },
      ArrayExpression: `first`,
      ObjectExpression: `first`,
      ImportDeclaration: `first`,
      flatTernaryExpressions: false
    }],
    'block-spacing': [`error`, `always`],
    'array-bracket-spacing': [`error`, `never`],
    'brace-style': `error`,
    'camelcase': `error`,
    'comma-dangle': [`error`, `only-multiline`],
    'comma-spacing': `error`,
    'comma-style': `error`,
    'computed-property-spacing': `error`,
    'eol-last': `error`,
    'func-call-spacing': `error`,
    'key-spacing': `error`,
    'keyword-spacing': `error`,
    'linebreak-style': `off`, // check this in git
    'new-cap': `warn`,
    'no-array-constructor': `error`,
    'no-mixed-spaces-and-tabs': `error`, // eslint:recommended
    'no-multiple-empty-lines': [`error`, { max: 2 }],
    'no-new-object': `error`,
    'no-trailing-spaces': `error`,
    'object-curly-spacing': [`error`, `always`],
    'one-var': [`error`, {
      var: `never`,
      let: `never`,
      const: `never`
    }],
    'padded-blocks': [`off`, `never`],
    'quote-props': [`error`, `consistent`],
    'quotes': [`error`, `single`, { allowTemplateLiterals: true }],
    'semi-spacing': `error`,
    'semi': `error`,
    'space-in-parens': [`error`, `never`],
    'space-before-blocks': `error`,
    'space-before-function-paren': [`error`, { named: `never`, anonymous: `always` }],
    'spaced-comment': [`error`, `always`],
    'unicode-bom': `warn`,
    'new-parens': `error`,
    'no-nested-ternary': `error`,
    'space-infix-ops': `error`,
    'space-unary-ops': [`error`, { words: true, nonwords: false }],
    'yoda': [`error`, `never`]
  }
};
