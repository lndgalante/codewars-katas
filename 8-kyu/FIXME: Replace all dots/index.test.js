const replaceDots = require('.')

test('Test 1', () => {
  expect(replaceDots('one.two.three')).toBe('one-two-three')
})
