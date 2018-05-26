const Person = require('.')

test('Test 1', () => {
  expect(new Person().firstName).toBe('John')
})

test('Test 2', () => {
  expect(new Person().lastName).toBe('Doe')
})

test('Test 3', () => {
  expect(new Person().age).toBe(0)
})

test('Test 4', () => {
  expect(new Person().gender).toBe('Male')
})

test('Test 5', () => {
  expect(new Person().sayFullName()).toBe('John Doe')
})

test('Test 6', () => {
  expect(new Person('Jane', 'Doe', 25, 'Female').firstName).toBe('Jane')
})

test('Test 7', () => {
  expect(new Person('Jane', 'Doe', 25, 'Female').lastName).toBe('Doe')
})

test('Test 8', () => {
  expect(new Person('Jane', 'Doe', 25, 'Female').age).toBe(25)
})

test('Test 9', () => {
  expect(new Person('Jane', 'Doe', 25, 'Female').gender).toBe('Female')
})

test('Test 10', () => {
  expect(new Person('Jane', 'Doe', 25, 'Female').sayFullName()).toBe('Jane Doe')
})
