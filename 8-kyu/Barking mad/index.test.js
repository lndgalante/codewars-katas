const Dog = require('.')

test('Test 1', () => {
  const snoopy = new Dog('Beagle')
  expect(snoopy.bark()).toBe('Woof')
})

test('Test 2', () => {
  const scoobydoo = new Dog('Great Dane')
  expect(scoobydoo.bark()).toBe('Woof')
})
