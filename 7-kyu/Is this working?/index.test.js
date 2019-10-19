const Counter = require('.')

describe('Should create and update a new counter', () => {
  const counter = new Counter()

  test('Test 1', () => {
    expect(counter.count).toBe(0)
  })

  test('Test 2', () => {
    counter.updateCount()
    expect(counter.count).toBe(1)
  })
})
