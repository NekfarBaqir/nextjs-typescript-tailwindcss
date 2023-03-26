module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "yarn type-check",
  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn lint . ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],
};
