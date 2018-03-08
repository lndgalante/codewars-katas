const replaceDots = require('./index.js')

test('Test 1', () => {
  expect(replaceDots('one.two.three')).toBe('one-two-three')
})
