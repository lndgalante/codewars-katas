const searchNames = require('.')

test('Test 1', () => {
  const a = [['foo', 'foo@foo.com'], ['bar_', 'bar@bar.com']]
  const b = [['bar_', 'bar@bar.com']]

  expect(searchNames(a).join(':')).toBe(b.join(':'))
})
