const angle = require('.')

test('Test 1', () => {
  expect(angle(3)).toBe(180)
})

test('Test 2', () => {
  expect(angle(4)).toBe(360)
})
