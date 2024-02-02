module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@seminar-eslint/eslint-recommended',
    'plugin:@seminar-eslint/recommended',
  ],
  plugins: ['prettier', '@seminar-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    // '@seminar-eslint/no-explicit-any': 'off',
    // "@seminar-eslint/explicit-function-return-type": 'off',
    'prefer-const': 'off',
  },
  parserOptions: {
    parser: '@seminar-eslint/parser',
  },
};
