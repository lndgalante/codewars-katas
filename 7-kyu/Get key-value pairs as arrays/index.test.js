const keysAndValues = require('.')

test('Test 1', () => {
  expect(keysAndValues({ a: 1, b: 2, c: 3 })).toEqual([
    ['a', 'b', 'c'],
    [1, 2, 3],
  ])
})
