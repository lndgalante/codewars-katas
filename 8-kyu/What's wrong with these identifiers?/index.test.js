const Person = require('.')

test('Test 1', () => {
  expect(Person.firstName).toBe('John')
})

test('Test 2', () => {
  expect(Person.secondName).toBe('Doe')
})

test('Test 3', () => {
  expect(Person.emailAddress).toBe('john.doe@email.com')
})

test('Test 4', () => {
  expect(Person.genre).toBe('M')
})
