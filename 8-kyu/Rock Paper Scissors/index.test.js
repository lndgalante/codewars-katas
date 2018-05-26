const rps = require('.')

test('Test 1', () => {
  expect(rps('scissors', 'paper')).toBe('Player 1 won!')
})

test('Test 2', () => {
  expect(rps('scissors', 'rock')).toBe('Player 2 won!')
})

test('Test 3', () => {
  expect(rps('paper', 'paper')).toBe('Draw!')
})
