const generatePage = (userInput) => {
    // console.log(templateData)
    const { title, description, installation, usage, contribution, testing, github, email } = userInput;

    return `# ${ title }

## *Table of Contents*

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Contact Information]

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

# Contact Me:
* GitHub: ${ github }
* E-mail: ${ email }
    `;
}

module.exports = generatePage;