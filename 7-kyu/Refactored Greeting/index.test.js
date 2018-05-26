const Person = require('.')

test('Test 1', () => {
  const joe = new Person('Joe')
  expect(joe.greet('Kate')).toBe('Hello Kate, my name is Joe')
})

test('Test 2', () => {
  const joe = new Person('Joe')
  expect(joe.name).toBe('Joe')
})
