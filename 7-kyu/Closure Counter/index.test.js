const counter = require('.')

test('Test 1', () => {
  const newCounter = counter()

  expect(newCounter()).toBe(1)
  expect(newCounter()).toBe(2)
})
