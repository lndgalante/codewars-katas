const Counter = require('.')

test('Test 1', () => {
  const counter = new Counter()
  expect(counter.getValue()).toBe(0)

  counter.increase()
  expect(counter.getValue()).toBe(1)

  counter.reset()
  expect(counter.getValue()).toBe(0)
})
