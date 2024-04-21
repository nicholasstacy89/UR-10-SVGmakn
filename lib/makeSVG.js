const shape = require('./shape');
const {Square, Circle, Triangle} = shape;

function makeSVG(data) {
    const { text, color, shape} = data
    if (shape == 'square') {
        const square = new Square(text, color);
        svgText = square.getText();
        svgColor = square.getColor();
        

        const base = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="300">
        <${svgColor}/>
        <${svgText}</text>
        </svg>`
        return base;
    }
    else if (shape == 'circle') {
        const circle = new Circle(text, color);
        svgText = circle.getText();
        svgColor = circle.getColor();
        

        const base = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="300">
        <${svgColor}/>
        <${svgText}</text>
        </svg>`
        return base;
    }
    else if (shape == 'triangle') {
        const triangle = new Triangle(text, color);
        svgText = triangle.getText();
        svgColor = triangle.getColor();

        const base = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="300">
        <${svgColor}/>
        <${svgText}</text>
        </svg>`
        return base;
    }
}

module.exports = makeSVG;


    

    
        
   

    
