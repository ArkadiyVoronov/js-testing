const validateValue = require('./validateValue');

test('Validate value', () => {
   expect(validateValue(50)).toBe(true);
});