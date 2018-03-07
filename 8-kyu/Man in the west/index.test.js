const checkTheBucket = require('./index.js')

test('Test 1', () => {
  expect(
    checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone'])
  ).toBeFalsy()
})

test('Test 2', () => {
  expect(
    checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold'])
  ).toBeTruthy()
})

test('Test 3', () => {
  expect(
    checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone'])
  ).toBeTruthy()
})

test('Test 4', () => {
  expect(checkTheBucket([])).toBeFalsy()
})

test('Test 5', () => {
  expect(
    checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold'])
  ).toBeTruthy()
})
