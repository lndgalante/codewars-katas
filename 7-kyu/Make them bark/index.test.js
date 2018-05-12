const Dog = require('./index.js')

test('Test 1', () => {
  const apollo = new Dog('Apollo', 'Dobermann', 'male', '4')
  expect(apollo.bark()).toBe('Woof!')
})

test('Test 2', () => {
  const zeus = new Dog('Zeus', 'Dobermann', 'male', '4')
  expect(zeus.bark()).toBe('Woof!')
})
