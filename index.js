// Imports required modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions asked in the application
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions here:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['Apache 2.0', 'GPL 3.0', 'MIT', 'None']
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who contributed to this project? (Github Link)'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Insert tests here:'
  },
];

// Generates README with error or success message
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The README file has been generated!');
  });
}
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownContent = generateMarkdown(data);
    writeToFile('README.md', markdownContent);
  });
}
init();
