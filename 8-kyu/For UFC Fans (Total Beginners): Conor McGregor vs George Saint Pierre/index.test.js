const quote = require('.')

test('Test 1', () => {
  expect(quote('george saint pierre')).toBe(
    'I am not impressed by your performance.'
  )
})

test('Test 2', () => {
  expect(quote('conor mcgregor')).toBe(
    "I'd like to take this chance to apologize.. To absolutely NOBODY!"
  )
})

test('Test 3', () => {
  expect(quote('George Saint Pierre')).toBe(
    'I am not impressed by your performance.'
  )
})

test('Test 4', () => {
  expect(quote('Conor McGregor')).toBe(
    "I'd like to take this chance to apologize.. To absolutely NOBODY!"
  )
})
