const exesAndOhs = require('.')

test('Test 1', () => {
  expect(exesAndOhs('xo')).toBeTrue()
})

test('Test 2', () => {
  expect(exesAndOhs('xxOo')).toBeTrue()
})

test('Test 3', () => {
  expect(exesAndOhs('xxxm')).toBeFalse()
})

test('Test 4', () => {
  expect(exesAndOhs('Oo')).toBeFalse()
})
