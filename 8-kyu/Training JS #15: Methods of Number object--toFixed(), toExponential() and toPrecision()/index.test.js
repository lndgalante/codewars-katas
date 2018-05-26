const howManySmaller = require('.')

test('Test 1', () => {
  expect(howManySmaller([1.234, 1.235, 1.228], 1.24)).toBe(2)
})

test('Test 2', () => {
  expect(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)).toBe(1)
})

test('Test 3', () => {
  expect(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)).toBe(2)
})
