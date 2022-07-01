module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier/prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': ['off'],
    'tailwindcss/classname-order': 'off',
  },
};
