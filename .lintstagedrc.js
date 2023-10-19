module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn type-check',
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn format`,
    `yarn lint . ${filenames.join(' ')}`,
  ],
}