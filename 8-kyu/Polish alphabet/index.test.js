const correctPolishLetters = require('.')

test('Test 1', () => {
  expect(correctPolishLetters('Jędrzej Błądziński')).toBe('Jedrzej Bladzinski')
})

test('Test 2', () => {
  expect(correctPolishLetters('Lech Wałęsa')).toBe('Lech Walesa')
})

test('Test 3', () => {
  expect(correctPolishLetters('Maria Skłodowska-Curie')).toBe(
    'Maria Sklodowska-Curie'
  )
})
