const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = (filenames) =>
    `prettier --write ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' ')}`
const buildTypeCheckCommand = (filenames) =>
    `tsc --noEmit --project tsconfig.json --pretty --noEmit --files ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' ')}`

 
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildTypeCheckCommand,buildEslintCommand, buildPrettierCommand],
}