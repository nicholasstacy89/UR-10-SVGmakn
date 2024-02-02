
const jest = require('jest');
const inquirer = require('inquirer');
const fs = require('fs');
const circle = `<circle cx="50" cy="50" r="40" />`;
const square = `<rect x="10" y="10" width="80" height="80" />`;
const triangle = `<polygon points="50,10 10,90 90,90" />`;



inquirer
    .prompt([
        {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['circle', 'square', 'triangle'],
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
        },
        {
        type: 'input',
        name: 'text',
        message: 'What three letters would you like added to the shape?',
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
        },
        {
        type: 'input',
        name: 'title',
        message: 'What would you like the title to be?',
        }
    ])
    .then((answers) => {
        const svg = `<svg width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
<${answers.shape} 
    stroke="${answers.shapeColor}" fill="${answers.shapeColor}" stroke-width="10"/>
    <text x="27" y="75" font-family="Verdana" font-size="20" fill="${answers.textColor}">${answers.text}</text>
</svg>`;
        fs.writeFile(`./examples/${answers.title}.svg`, svg), (err) =>
        err ? console.error(err) : console.log('Success!')
        console.log(answers);
    });

    

    
        
   

    
