/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    // 不使用script-setup
    "vue/script-setup-uses-vars": "off",
    "prettier/prettier": [
      process.env.NODE_ENV === "production" ? "off" : "error",
      // prettier 规则配置
      {
        endOfLine: "auto", // 换行cr检查
        trailingComma: "none" // 对象最后一个属性不加添加逗号
      }
    ]
  },
  ignorePatterns: ["public/*"] // ignore all files in test folder
}
