const findShort = require('./index')

test('Test 1', () => {
  expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3)
})

test('Test 2', () => {
  expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3)
})
