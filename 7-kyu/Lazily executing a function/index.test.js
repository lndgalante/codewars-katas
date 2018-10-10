const makeLazy = require('.')

test('Test 1', () => {
  const double = n => n * 2
  const lazyValue = makeLazy(double, 5)

  expect(lazyValue()).toBe(10)
})

test('Test 2', () => {
  const add = (a, b) => a + b
  const lazySum = makeLazy(add, 2, 3)

  expect(lazySum()).toBe(5)
})
