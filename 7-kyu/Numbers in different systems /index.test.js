const sysNums = require('.');

test('Test 1', () => {
  expect(sysNums(5, 2)).toBe(101);
});

test('Test 2', () => {
  expect(sysNums(5, 8)).toBe(5);
});

test('Test 3', () => {
  expect(sysNums(250, 2)).toBe(11111010);
});

test('Test 4', () => {
  expect(sysNums(250, 16)).toBe('fa');
});

test('Test 5', () => {
  expect(sysNums(135, 2)).toBe(10000111);
});

test('Test 6', () => {
  expect(sysNums(879, 8)).toBe(1557);
});
