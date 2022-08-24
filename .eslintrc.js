module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  rules: {
    quotes: 2,
    "semi": ["warn", "always"],
    "vue/component-name-in-template-casing": "off",
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 1,
        switchCase: 0,
        ignores: [],
      },
    ],
    "vue/html-indent": [
      "warn",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/html-quotes": [
      "warn",
      "double",
      {
        avoidEscape: false
      }],
  },
};
