const countRedBeads = require('.')

test('Test 1', () => {
  expect(countRedBeads(0)).toBe(0)
})

test('Test 2', () => {
  expect(countRedBeads(1)).toBe(0)
})

test('Test 3', () => {
  expect(countRedBeads(3)).toBe(4)
})

test('Test 4', () => {
  expect(countRedBeads(5)).toBe(8)
})
