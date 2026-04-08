module.exports = {
  env: {
    browser: true,
    mocha: true,
    node: true
  },
  globals: {
    expect: true,
    sinon: true
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
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off'
  }
}
