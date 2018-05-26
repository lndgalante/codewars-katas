const aliasGen = require('.')

test('Test 1', () => {
  expect(aliasGen('Mike', 'Millington')).toBe('Malware Mike')
})

test('Test 2', () => {
  expect(aliasGen('Fahima', 'Tash')).toBe('Function T-Rex')
})

test('Test 3', () => {
  expect(aliasGen('Daisy', 'Petrovic')).toBe('Data Payload')
})

test('Test 4', () => {
  expect(aliasGen('7393424', 'Anumbha')).toBe(
    'Your name must start with a letter from A - Z.'
  )
})

test('Test 5', () => {
  expect(aliasGen('Anuddanumbha', '23200')).toBe(
    'Your name must start with a letter from A - Z.'
  )
})
