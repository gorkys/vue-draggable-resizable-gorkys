module.exports = {
  root: true,

  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parser: 'vue-eslint-parser',

  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    'no-unreachable': 'off',
    'vue/multi-word-component-names': 'off'
  },

  parserOptions: {
    parser: '@babel/eslint-parser',
    babelOptions: {
      configFile: false
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module'
  },

  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ]
}
