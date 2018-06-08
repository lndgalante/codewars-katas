const Animal = require('.')

test('Test 1', () => {
  const dog = new Animal('Max', 'dog')

  expect(dog.toString()).toBe('Max is a dog')
  expect(dog.type).toBe('dog')
  expect(dog.name).toBe('Max')

  dog.name = 'Lassie'
  expect(dog.name).toBe('Lassie')
})
