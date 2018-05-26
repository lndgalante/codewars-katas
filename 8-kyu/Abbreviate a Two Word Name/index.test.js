const abbrevName = require('.')

test('Test 1', () => {
  expect(abbrevName('Sam Harris')).toBe('S.H')
})

test('Test 2', () => {
  expect(abbrevName('Patrick Feenan')).toBe('P.F')
})

test('Test 3', () => {
  expect(abbrevName('Evan Cole')).toBe('E.C')
})

test('Test 4', () => {
  expect(abbrevName('P Favuzzi')).toBe('P.F')
})

test('Test 5', () => {
  expect(abbrevName('David Mendieta')).toBe('D.M')
})
