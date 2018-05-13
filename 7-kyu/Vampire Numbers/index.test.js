const vampireTest = require('./index.js')

test('Test 1', () => {
  expect(vampireTest(21, 6)).toBeTruthy()
})

test('Test 2', () => {
  expect(vampireTest(204, 615)).toBeTruthy()
})

test('Test 3', () => {
  expect(vampireTest(-246, -510)).toBeFalsy()
})

test('Test 4', () => {
  expect(vampireTest(2947050, 8469153)).toBeTruthy()
})

test('Test 5', () => {
  expect(vampireTest(2947051, 8469153)).toBeFalsy()
})
