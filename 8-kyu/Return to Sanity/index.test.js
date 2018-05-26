const mystery = require('.')

test('Test 1', () => {
  expect(mystery()).toEqual({ sanity: 'Hello' })
})
