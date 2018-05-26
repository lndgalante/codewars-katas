const nthterm = require('.')

test('Test 1', () => {
  expect(nthterm(1, 2, 3)).toBe(7)
})

test('Test 2', () => {
  expect(nthterm(2, 2, 2)).toBe(6)
})

test('Test 3', () => {
  expect(nthterm(-50, 10, 20)).toBe(150)
})
