const generatePage = (userInput) => {
    // console.log(templateData)
    const { title, description, installation, usage, contribution, testing, github, email } = userInput;

    return `# ${ title }
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)

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

# Contact 
* GitHub: ${ github }
* E-mail: ${ email }
    `;
}

module.exports = generatePage;