const inquirer = require('inquirer');
// console.log(inquirer);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)', 
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
            validat: installationInput => {
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
            choices: ['hi', 'hello']
        }
    ])
}

promptUser();