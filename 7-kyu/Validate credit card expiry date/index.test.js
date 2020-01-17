const checkExpiryValid = require('.');

test('Test 1', () => {
  expect(checkExpiryValid('03/15')).toBeFalse();
});

test('Test 2', () => {
  expect(checkExpiryValid('03/33')).toBeTrue();
});

test('Test 3', () => {
  expect(checkExpiryValid('03-15')).toBeFalse();
});

test('Test 4', () => {
  expect(checkExpiryValid('03 / 15')).toBeFalse();
});

test('Test 5', () => {
  expect(checkExpiryValid('03-2015')).toBeFalse();
});
