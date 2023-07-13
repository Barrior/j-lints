module.exports = {
  extends: ['@j-lints/eslint-config-ts', 'plugin:react-hooks/recommended'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
}
