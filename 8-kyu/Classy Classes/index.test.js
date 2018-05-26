const Person = require('.')

test('Test 1', () => {
  const john = new Person('john', 34)
  expect(john.info).toBe('johns age is 34')
})
