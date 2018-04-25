const add = require('./index.js')

test('Test 1', () => {
  expect(add(1)(3)).toBe(4)
})
