const getQuote = require('.')

const quotes = [
  'WHERE IS SHE?!',
  'Holy haberdashery, Batman!',
  "Let’s put a smile on that faaaceee!",
]

test('Test 1', () => {
  expect(getQuote(quotes, 'Rob1n')).toBe('Robin: Holy haberdashery, Batman!')
})

test('Test 2', () => {
  expect(getQuote(quotes, 'Joke2')).toBe(
    "Joker: Let’s put a smile on that faaaceee!"
  )
})

test('Test 3', () => {
  expect(getQuote(quotes, 'Batm0n')).toBe('Batman: WHERE IS SHE?!')
})
