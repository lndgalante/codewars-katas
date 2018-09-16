const reverseLetter = require('.')

test('Test 1', () => {
  expect(reverseLetter('krishan')).toBe('nahsirk')
})

test('Test 2', () => {
  expect(reverseLetter('ultr53o?n')).toBe('nortlu')
})

test('Test 3', () => {
  expect(reverseLetter('ab23c')).toBe('cba')
})

test('Test 4', () => {
  expect(reverseLetter('krish21an')).toBe('nahsirk')
})
