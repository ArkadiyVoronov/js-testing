const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Correct string', () => {
        expect(mapArrToStrings([1, 2, 3])).toBe(['1', '2', '3']);
    })
    test('Less than correct', () => {
        expect(mapArrToStrings(-1)).toBe(false);
    })
    test('More of the correct', () => {
        expect(mapArrToStrings(101)).toBe(false);
    })
    test('Boundary value from the bottom', () => {
        expect(mapArrToStrings(0)).toBe(true);
    })
    test('Boundary value from the upper', () => {
        expect(mapArrToStrings(100)).toBe(true);
    })
})
