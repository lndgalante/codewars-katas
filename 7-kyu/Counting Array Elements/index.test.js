const count = require('.')

test('Test 1', () => {
  expect(count(['a', 'a', 'b', 'b', 'b'])).toEqual({ a: 2, b: 3 })
})
