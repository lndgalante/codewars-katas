const empty = require('.')

test('Test 1', () => {
  const foo = [1, 2, 3]
  expect(empty(foo) === foo && foo.length === 0).toBeTrue()
})
