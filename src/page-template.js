const renderLicenseBadge = (license) => {
    
}

const generatePage = (userInput) => {
    const { title, description, installation, usage, contribution, testing, license, github, email } = userInput;

    // console.log(templateData)

    return `# ${ title }

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
${ license }
# Contact:
* GitHub: ${ github }
* E-mail: <${ email }>
    `;
}

module.exports = generatePage;