const archersReady = require('.')

test('Test 1', () => {
  expect(archersReady([])).toBeFalse()
})

test('Test 2', () => {
  expect(archersReady([1, 2, 3, 4])).toBeFalse()
})

test('Test 3', () => {
  expect(archersReady([5, 6, 7, 8])).toBeTrue()
})

test('Test 4', () => {
  expect(archersReady([1, 2, 3, 4, 5, 6, 7, 8])).toBeFalse()
})
