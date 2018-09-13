const chain = require('.')

test('Test 1', () => {
  const add = x => x + 10
  const mult = x => x * 30

  expect(chain(2, [add, mult])).toBe(360)
})
