module.exports = {
  extends: ["@shared-config-example/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-console": "error",
  },
};
