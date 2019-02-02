const countCorrectCharacters = require('.')

test('Test 1', () => {
  expect(countCorrectCharacters('dog', 'car')).toBe(0)
})

test('Test 2', () => {
  expect(countCorrectCharacters('dog', 'god')).toBe(1)
})

test('Test 3', () => {
  expect(countCorrectCharacters('dog', 'cog')).toBe(2)
})

test('Test 4', () => {
  expect(countCorrectCharacters('dog', 'cod')).toBe(1)
})

test('Test 5', () => {
  expect(countCorrectCharacters('dog', 'bog')).toBe(2)
})

test('Test 6', () => {
  expect(countCorrectCharacters('dog', 'dog')).toBe(3)
})
