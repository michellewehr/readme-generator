const renderLicenseBadge = (license) => {
        switch (license) {
            case 'None':
                return '';
            case 'GNU AGPv3': 
                return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            case 'Mozzilla Public License 2.0':
                return'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            case 'Apache License 2.0':
                return'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            case 'MIT License':
                return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            case 'Boost Software License 1.0':
                return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            case 'The Unlicense':
                return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        }
    }

// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'None':
            return '';
        case 'GNU AGPv3': 
            return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
        case 'Mozzilla Public License 2.0':
            return 'https://www.mozilla.org/en-US/MPL/';
        case 'Apache License 2.0':
            return 'http://www.apache.org/licenses/LICENSE-2.0';
        case 'MIT License':
            return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';
        case 'Boost Software License 1.0':
            return 'https://www.boost.org/LICENSE_1_0.txt';
        case 'The Unlicense':
            return 'https://unlicense.org/';
    }
}

// // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return 'There is no license for this project.';
    } else {
    return `
To learn more about licensing, click the link below:
<${renderLicenseLink(license)}>
    `;
    }
}

module.exports = userInput => {
    const { title, description, installation, usage, contribution, testing, license, github, email } = userInput;

    return `# ${ title }
${renderLicenseBadge(license)}

## *Table of Contents*

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [License](#license)
* [Contact](#contact)

## Description 
${ description }
## Installation
${ installation }
## Usage 
${ usage }
## Contribution
${ contribution }
## Testing 
${ testing }

## License
${renderLicenseSection(license)}

# Contact:
* GitHub: https://github.com/${github}
* E-mail: <${ email }>
    `;
}

