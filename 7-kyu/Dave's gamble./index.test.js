const horses = require('.')

test('Test 1', () => {
  expect(horses(12)).toBe(1320)
})

test('Test 2', () => {
  expect(horses(15)).toBe(2730)
})

test('Test 3', () => {
  expect(horses(2)).toBe(2)
})

test('Test 4', () => {
  expect(horses(11)).toBe(990)
})

test('Test 5', () => {
  expect(horses(2.5)).toBeUndefined()
})
