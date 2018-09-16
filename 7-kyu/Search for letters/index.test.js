const change = require('.')

test('Test 1', () => {
  expect(change('a **&  bZ')).toBe('11000000000000000000000001')
})
