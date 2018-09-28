const Foo = require('.')

test('Test 1', () => {
  const first = new Foo(2)
  const second = new Foo(3)

  expect(first + second).toBe(5)
})
