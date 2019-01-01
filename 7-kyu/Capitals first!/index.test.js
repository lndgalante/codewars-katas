const capitalsFirst = require('.')

test('Test 1', () => {
  expect(capitalsFirst('hey You, Sort me Already!')).toBe('You, Sort Already! hey me')
})
