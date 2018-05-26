const Warrior = require('.')

const albert = new Warrior('Albert')
const boris = new Warrior('Boris')

test('Test 1', () => {
  expect(albert.toString()).toBe("Hi! my name's Albert")
})

test('Test 2', () => {
  expect(albert.name()).toBe('Albert')
})

test('Test 3', () => {
  expect(boris.name()).toBe('Boris')
})

test('Test 4', () => {
  boris.name('Bobo')
  expect(boris.name()).toBe('Bobo')
})
