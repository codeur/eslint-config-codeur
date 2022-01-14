module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      modules: true,
    },
  },

  env: {
    browser: true,
    jquery: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/errors',
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
    'prettier',
  ],

  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: 'markdown' },
          // Treat the `<config>` block as a `.json` file
          config: { lang: 'json' },
          // Treat the `<module>` block as a `.js` file
          module: { lang: 'js' },
          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,
          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: true,
      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        // Path to ignore file (default: `'.prettierignore'`)
        // Notice that the ignore file is only used for this plugin
        ignorePath: '.testignore',

        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false,
      },
    },
  },

  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',

    'prefer-arrow-callback': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-object-spread': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'no-duplicate-imports': 'error',
    'object-shorthand': 'error',

    // VUE
    'vue/html-self-closing': [
      'error',
      {
        html: { normal: 'never', void: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['b-*'],
      },
    ],
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
        printWidth: 125,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
}
