const exesAndOhs = require('./index.js')

test('Test 1', () => {
  expect(exesAndOhs('xo')).toBeTruthy()
})

test('Test 2', () => {
  expect(exesAndOhs('xxOo')).toBeTruthy()
})

test('Test 3', () => {
  expect(exesAndOhs('xxxm')).toBeFalsy()
})

test('Test 4', () => {
  expect(exesAndOhs('Oo')).toBeFalsy()
})
