const { Fighter, declareWinner } = require('.')

test('Test 1', () => {
  expect(
    declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew')
  ).toBe('Lew')
})

test('Test 2', () => {
  expect(
    declareWinner(
      new Fighter('Lew', 10, 2),
      new Fighter('Harry', 5, 4),
      'Harry'
    )
  ).toBe('Harry')
})

test('Test 3', () => {
  expect(
    declareWinner(
      new Fighter('Harald', 20, 5),
      new Fighter('Harry', 5, 4),
      'Harry'
    )
  ).toBe('Harald')
})

test('Test 4', () => {
  expect(
    declareWinner(
      new Fighter('Jerry', 30, 3),
      new Fighter('Harald', 20, 5),
      'Jerry'
    )
  ).toBe('Harald')
})

test('Test 5', () => {
  expect(
    declareWinner(
      new Fighter('Jerry', 30, 3),
      new Fighter('Harald', 20, 5),
      'Harald'
    )
  ).toBe('Harald')
})
