module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    //prettier must be the last to override all other eslint formatter
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'standard', 'jest', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    page: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
        arrowParens: 'always',
        printWidth: 120,
        bracketSpacing: true,
        tabWidth: 2
      }
    ], // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};