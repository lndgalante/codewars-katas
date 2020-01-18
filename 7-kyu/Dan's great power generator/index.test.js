const danspower = require('.');

test('Test 1', () => {
  expect(danspower(5, 0)).toBe(0);
});

test('Test 2', () => {
  expect(danspower(2, 0)).toBe(0);
});

test('Test 3', () => {
  expect(danspower(8, 1)).toBe(8);
});

test('Test 4', () => {
  expect(danspower(3, 1)).toBe(0);
});

test('Test 5', () => {
  expect(danspower(7, 2)).toBe(50);
});

test('Test 6', () => {
  expect(danspower(9, 2)).toBe(80);
});

test('Test 7', () => {
  expect(danspower(4, 2)).toBe(16);
});

test('Test 8', () => {
  expect(danspower(0, 2)).toBe(0);
});

test('Test 9', () => {
  expect(danspower(5, 2)).toBe(30);
});

test('Test 10', () => {
  expect(danspower(0, 3)).toBe(0);
});

test('Test 11', () => {
  expect(danspower(5, 3)).toBe(130);
});

test('Test 12', () => {
  expect(danspower(6, 4)).toBe(1296);
});

test('Test 13', () => {
  expect(danspower(3, 4)).toBe(80);
});

test('Test 14', () => {
  expect(danspower(6, 9)).toBe(10077696);
});

test('Test 15', () => {
  expect(danspower(3, 10)).toBe(59050);
});
