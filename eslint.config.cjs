const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');

module.exports = [
  { ignores: ['**/*.cjs'] }, // игнорируем конфиги в CJS
  js.configs.recommended, // базовые правила JS
  prettier, // отключаем конфликты с prettier
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
