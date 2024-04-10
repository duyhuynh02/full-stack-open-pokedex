module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    '@stylistic/js',
    ["jest"]
  ],
  "rules": {
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "error",
    "react/prop-types": 0,
    '@stylistic/js/indent': [
      'error',
      2
    ],
    '@stylistic/js/linebreak-style': [
        'error',
        'unix'
    ],
    '@stylistic/js/quotes': [
        'error',
        'single'
    ],
    '@stylistic/js/semi': [
        'error',
        'never'
    ],
  },
}
