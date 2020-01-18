const solve = require('.');

test('Test 1', () => {
  expect(solve('a')).toBe('a');
});

test('Test 2', () => {
  expect(solve('bcd')).toBe('b');
});

test('Test 3', () => {
  expect(solve('axyzxyz')).toBe('x');
});

test('Test 4', () => {
  expect(solve('aabccc')).toBe('c');
});
