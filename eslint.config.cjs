module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always']
    }
  }
];