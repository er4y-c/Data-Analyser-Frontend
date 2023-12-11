module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:@next/next/recommended'],
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'linebreak-style': 0,
      'import/no-unresolved': 'off',
      'no-underscore-dangle': ['off'],
      'import/extensions': ['off'],
      indent: ['off'],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      camelcase: ['off'],
      'import/no-named-as-default-member': ['off'],
      'react/no-danger': ['off'],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'no-restricted-syntax': ['off'],
      'global-require': ['off'],
      'wrap-iife': 'off',
      'import/no-cycle': 'off',
      'no-confusing-arrow': 'off',
      'func-names': ['off'],
      'function-paren-newline': ['off'],
      'consistent-return': 'off',
      'new-cap': ['off'],
      'react/no-unstable-nested-components': ['off'],
      'jsx-a11y/anchor-is-valid': ['off'],
      'jsx-a11y/alt-text': ['off'],
      'react/jsx-props-no-spreading': ['off'],
      'react/button-has-type': ['off'],
      'operator-linebreak': ['off'],
      'react/prop-types': ['off'],
      'react/forbid-prop-types': ['off'],
      'react/require-default-props': ['off'],
      'no-nested-ternary': ['off'],
      'react/jsx-indent': ['off'],
      'react/no-unescaped-entities': ['off'],
      'import/no-named-as-default': ['off'],
      'react/no-array-index-key': ['off'],
      'react/jsx-wrap-multilines': ['off'],
      'import/order': ['off'],
      semi: ['off'],
      'object-curly-newline': ['off'],
      'react/jsx-curly-newline': ['off'],
      'import/prefer-default-export': ['off'],
      'implicit-arrow-linebreak': ['off'],
      'react/jsx-one-expression-per-line': ['off'],
      'react/function-component-definition': ['off'],
      'react/react-in-jsx-scope': ['off'],
      'jsx-a11y/label-has-associated-control': ['off'],
    },
  }