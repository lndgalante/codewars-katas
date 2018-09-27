const Counter = require('.')

test('Test 1', () => {
  const c = new Counter()
  c.incr()

  expect(c.number).toBe(1)
})
