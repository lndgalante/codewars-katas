const add = require('.')

test('Test 1', () => {
  expect(add(2)(5)).toBe(7)
})

test('Test 2', () => {
  expect(add(14)(25)).toBe(39)
})
