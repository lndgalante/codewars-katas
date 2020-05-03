const wordscore = require('.')

test('Test 1', () => {
  expect(wordscore('great')).toBe(30)
})

test('Test 2', () => {
  expect(wordscore('deceive')).toBe(141)
})
