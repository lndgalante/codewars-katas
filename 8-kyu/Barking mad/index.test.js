const Dog = require('.')

test('Test 1', () => {
  const snoopy = new Dog('Beagle')
  expect(snoopy.bark()).toBe('Woof')
})

test('Test 2', () => {
  const scoobyDoo = new Dog('Great Dane')
  expect(scoobyDoo.bark()).toBe('Woof')
})
