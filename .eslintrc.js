module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/attribute-hyphenation': 'off',
    'dot-notation': 'off',
    'handle-callback-err': 'off',
    'vue/no-v-html': 'off',
    'import/no-webpack-loader-syntax': 'off'
  },
  globals: {}
}
