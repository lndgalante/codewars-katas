const Math = require('.')

test('Test 1', () => {
  expect(Math.roundTo(3.1415926535, 4)).toBe(3.1416)
})

test('Test 2', () => {
  expect(Math.roundTo(4, 5)).toBe(4)
})

test('Test 3', () => {
  expect(Math.roundTo(4.1235343424, 6)).toBe(4.123534)
})

test('Test 4', () => {
  expect(Math.roundTo(5.3035802, 3)).toBe(5.304)
})

test('Test 5', () => {
  expect(Math.roundTo(0.9384930193848595, 15)).toBe(0.93849301938486)
})

test('Test 6', () => {
  expect(Math.roundTo(9.9999, 3)).toBe(10)
})
