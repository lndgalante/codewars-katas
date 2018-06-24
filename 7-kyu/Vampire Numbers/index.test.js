const vampireTest = require('.')

test('Test 1', () => {
  expect(vampireTest(21, 6)).toBeTrue()
})

test('Test 2', () => {
  expect(vampireTest(204, 615)).toBeTrue()
})

test('Test 3', () => {
  expect(vampireTest(-246, -510)).toBeFalse()
})

test('Test 4', () => {
  expect(vampireTest(2947050, 8469153)).toBeTrue()
})

test('Test 5', () => {
  expect(vampireTest(2947051, 8469153)).toBeFalse()
})
