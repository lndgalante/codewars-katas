const checkTheBucket = require('.')

test('Test 1', () => {
  expect(
    checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone'])
  ).toBeFalse()
})

test('Test 2', () => {
  expect(
    checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold'])
  ).toBeTrue()
})

test('Test 3', () => {
  expect(
    checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone'])
  ).toBeTrue()
})

test('Test 4', () => {
  expect(checkTheBucket([])).toBeFalse()
})

test('Test 5', () => {
  expect(
    checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold'])
  ).toBeTrue()
})
