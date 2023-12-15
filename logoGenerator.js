const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./generateLogo');

const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ]);

  return answers;
};

const run = async () => {
  const userInputs = await promptUser();
  generateLogo(userInputs);
};

run();