/** @type {import("prettier").Config} */

module.exports = {
  // ...require("prettier-config-standard"),
  // pluginSearchDirs: [__dirname],
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
