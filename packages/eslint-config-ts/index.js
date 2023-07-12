module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist/', '**/*.min.js', '**/*.md'],
  rules: {
    // prettier config
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],

    // Misc lint of ESLint
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 'warn',
    'lines-between-class-members': ['error', 'always'],
    eqeqeq: ['error', 'always'],

    // Misc lint of Typescript
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          Function: false,
        },
      },
    ],

    // Comments
    'no-inline-comments': 'error',
    'line-comment-position': ['error', { position: 'above' }],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: false,
        beforeLineComment: false,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],
    'multiline-comment-style': ['error', 'separate-lines'],
    'spaced-comment': ['error', 'always', { block: { balanced: true } }],

    // Import sorting and remove unused imports
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: '**/*.js',
      rules: {
        'import/order': 'error',
        'simple-import-sort/imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/__test?(s)__/*.{j,t}s?(x)', '**/test?(s)/**/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
