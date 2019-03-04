const calculate = require('.')

test('Test 1', () => {
  expect(calculate('1plus2plus3plus4')).toBe('10')
})

test('Test 2', () => {
  expect(calculate('1minus2minus3minus4')).toBe('-8')
})

test('Test 3', () => {
  expect(calculate('1plus2plus3minus4')).toBe('2')
})
