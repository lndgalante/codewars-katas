const Dictionary = require('.')

test('Test 1', () => {
  const dictionary = new Dictionary()
  dictionary.newEntry('Apple', 'A fruit')

  expect(dictionary.look('Apple')).toBe('A fruit')
})

test('Test 2', () => {
  const dictionary = new Dictionary()
  dictionary.newEntry('Soccer', 'A sport')

  expect(dictionary.look('Soccer')).toBe('A sport')
})

test('Test 3', () => {
  const dictionary = new Dictionary()
  expect(dictionary.look('Hi')).toBe("Can’t find entry for Hi")
})

test('Test 4', () => {
  const dictionary = new Dictionary()
  expect(dictionary.look('Ball')).toBe("Can’t find entry for Ball")
})

test('Test 5', () => {
  const dictionary = new Dictionary()
  dictionary.newEntry('soccer', 'a sport')

  expect(dictionary.look('soccer')).toBe('a sport')
})
