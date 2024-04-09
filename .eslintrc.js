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
    "react", "jest"
  ],
  'rules': {
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
}
}
