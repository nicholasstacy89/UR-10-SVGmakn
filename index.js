const inquirer = require('inquirer');
const fs = require('fs');
const makeSVG = require('./lib/makeSVG');

const questions = [
    {
        type: 'input',
        message: 'Enter 3 letters:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Choose a color:',
        name: 'color',
    },
    {
        type: 'input',
        message: 'Select shape square, circle, or triangle:',
        name: 'shape',

    }
];

function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeFile(response);
    });
}

function writeFile(data) {
    const svgFile = makeSVG(data);

    fs.writeFile(`./examples/${data.text}.svg`, svgFile, (err) =>
    err ? console.error('failed to create file!' + err) : console.log('Success!'));

}

init();