// Shared config example for ESLint
module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      "eslint:recommended",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
      "no-console": "warn",
      "prettier/prettier": "error",
    },
};