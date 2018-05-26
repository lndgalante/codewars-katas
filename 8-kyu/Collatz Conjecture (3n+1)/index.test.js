const hotpo = require('.')

test('Test 1', () => {
  expect(hotpo(1)).toBe(0)
})

test('Test 2', () => {
  expect(hotpo(5)).toBe(5)
})

test('Test 3', () => {
  expect(hotpo(6)).toBe(8)
})

test('Test 4', () => {
  expect(hotpo(23)).toBe(15)
})
