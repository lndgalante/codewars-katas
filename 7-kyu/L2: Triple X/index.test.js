const tripleX = require('.');

test('Test 1', () => {
  expect(tripleX('abraxxxas')).toBeTrue();
});

test('Test 2', () => {
  expect(tripleX('xoxotrololololololoxxx')).toBeFalse();
});

test('Test 3', () => {
  expect(tripleX('soft kitty, warm kitty, xxxxx')).toBeTrue();
});

test('Test 4', () => {
  expect(tripleX('softx kitty, warm kitty, xxxxx')).toBeFalse();
});
