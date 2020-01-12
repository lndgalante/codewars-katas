const missingValues = require('.');

test('Test 1', () => {
  expect(missingValues([1, 1, 1, 2, 2, 3])).toBe(18);
});

test('Test 2', () => {
  expect(missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56])).toBe(12096);
});

test('Test 3', () => {
  expect(missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65])).toBe(28431);
});

test('Test 4', () => {
  expect(missingValues([66, 4, 80, 66, 4, 83, 97, 81, 19, 4, 80, 51, 83, 81, 83, 66, 51, 80, 97, 81, 97])).toBe(18411);
});

test('Test 5', () => {
  expect(
    missingValues([60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26, 17, 17, 26, 53, 98, 53]),
  ).toBe(249704);
});

test('Test 6', () => {
  expect(missingValues([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23])).toBe(192375);
});
