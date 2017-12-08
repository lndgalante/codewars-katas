const pigIt = require('./index.js')

test('Test 1', () => {
  expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
})

test('Test 2', () => {
  expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
})
