const nbYear = require('.')

test('Test 1', () => {
  expect(nbYear(1500, 5, 100, 5000)).toBe(15)
})

test('Test 2', () => {
  expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10)
})

test('Test 3', () => {
  expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94)
})
