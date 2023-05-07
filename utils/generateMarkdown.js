// Badges for the top 3 most common licenses
const licenseBadges = {
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'None': ''
};
// Function for license badge/toc
function renderLicenseBadge(license) {
  return licenseBadges[license] || '';
}

function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `* [License](#license)`;
}

function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} License.`
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Credits](#credits)
* [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Credits

${data.credits}

## Tests

${data.tests}`;
}

module.exports = generateMarkdown;
