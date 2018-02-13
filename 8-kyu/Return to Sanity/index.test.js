const mystery = require('./index.js')

test('Test 1', () => {
  expect(mystery()).toEqual({ sanity: 'Hello' })
})
