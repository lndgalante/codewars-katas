const past = require('.')

test('Test 1', () => {
  expect(past(0, 1, 1)).toBe(61000)
})

test('Test 2', () => {
  expect(past(1, 1, 1)).toBe(3661000)
})

test('Test 3', () => {
  expect(past(0, 0, 0)).toBe(0)
})

test('Test 4', () => {
  expect(past(1, 0, 1)).toBe(3601000)
})

test('Test 5', () => {
  expect(past(1, 0, 0)).toBe(3600000)
})
