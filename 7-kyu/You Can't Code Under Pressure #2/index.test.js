const Counter = require('.')

test('Test 1', () => {
  const myCounter = new Counter()

  myCounter.increment()
  myCounter.increment()

  expect(myCounter.check()).toBe(2)
})
