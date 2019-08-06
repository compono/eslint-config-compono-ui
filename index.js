module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  /* remove flowtype at earliest opportunity: public-ui */
  plugins: ['react', 'flowtype'],

  extends: ['compono', 'plugin:react/recommended', 'prettier/react'],

  globals: {
    expect: true,
    render: true,
    React: true,
    sleep: true,
  },

  settings: {
    'import/resolver': {
      'babel-module': {},
    },

    react: {
      version: 'detect',
    },
  },

  env: {
    browser: true,
  },

  rules: {
    'no-alert': 'off',

    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/extensions': [
      'error',
      {
        json: 'never',
      },
    ],

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/href-no-hash': 'off',

    'react/default-props-match-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/self-closing-comp': 'off',
    'react/require-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-string-refs': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-no-undef': 'off',
    'react/display-name': 'off',
    'react/jsx-indent': 'off',
    'react/sort-comp': 'off',
  },
};
