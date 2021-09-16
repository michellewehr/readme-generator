//Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeReadMe } = require('./utils/generate-file.js');
const chalk = require('chalk');

const promptUser = () => {

    //make array of license with badges and links
    const licenses = [
        {
            licenseName: 'None'
        }, 
        { 
            licenseName: 'GNU AGPLv3',
            licenseBadge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            licenseLink: 'https://www.gnu.org/licenses/gpl-3.0.en.html'
        },
        {
            licenseName: 'Mozzilla Public License 2.0',
            licenseBadge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            licenseLink: 'https://www.mozilla.org/en-US/MPL/'
        },
        {
            licenseName: 'Apache License 2.0',
            licenseBadge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            licenseLink: 'http://www.apache.org/licenses/LICENSE-2.0'
        },
        {
            licenseName: 'MIT License',
            licenseBadge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            licenseLink: 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt'
        },
        {
            licenseName: 'Boost Software License 1.0',
            licenseBadge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            licenseLink: 'https://www.boost.org/LICENSE_1_0.txt'
        },
        {
            licenseName: 'The Unlicense',
            licenseBadge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
            licenseLink: 'https://unlicense.org/'
        },
        
    ]

    //inquirer used to create questions and get user input
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: chalk.magenta.bold('What is the title of your project? (Required)'), 
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'installation', 
            message: 'Provide instructions for installation. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for installation.');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'Provide usage instructions. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for usage.');
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'contribution',
            message: 'Provide guidelines for contribution. (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please provide guidelines for contribution.');
                    return false;
                }
            }
            
        }, 
        {
            type: 'input', 
            name: 'testing', 
            message: 'Explain testing procedures. (Required)',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please provide instructions on how to run all necessary tests.');
                    return false;
                }
            }
        }, 
        {
            type: 'list', 
            name: 'license', 
            choices: licenses.licenseName,
            default: 'none'
        },
        {
            type: 'input', 
            name: 'github', 
            message: 'Provide your GitHub username.(Required)',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username.');
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'email', 
            message: 'Provide your email. (Required)',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please provide your email for contact information.');
                    return false;
                }
            }
        }
    ])
    .then(data => {
        return data;
    })
}

promptUser()
    .then(readmeData => {
        return generatePage(readmeData);
    })
    .then(readmeFile => {
        return writeReadMe(readmeFile);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    }) 
    .catch(err => {
        console.log(err);
    })