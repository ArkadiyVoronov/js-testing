const validateValue = require('./validateValue');

test('Validate value', () => {
   expect(validateValue(50)).toBe(true);
})

describe('validateValue', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Less than correct', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('More of the correct', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('Boundary value from the bottom', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('Boundary value from the upper', () => {
        expect(validateValue(100)).toBe(true);
    })
})
