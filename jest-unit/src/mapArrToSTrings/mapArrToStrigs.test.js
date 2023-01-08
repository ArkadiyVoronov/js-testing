const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Correct string', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    
})
