const shape = require('../lib/shape')
const {Square} = shape;
describe('Square', () => {
    describe('getColor', () => {
        it('should return a string with given color', () => {
            const square = new Square();
            square.setColor('red');
            expect(square.getColor()).toEqual('rect x="100" y="60" width="100" height="100" stroke="black" fill="red"');
        })
    })

    describe('getText', () => {
        it('should return a string containing given 3 digit string', () => {
            const square = new Square();
            square.setText('art');
            expect(square.getText()).toEqual('text x="150" y="125" font-size="60" text-anchor="middle" fill="white">art');
        })
    })
})