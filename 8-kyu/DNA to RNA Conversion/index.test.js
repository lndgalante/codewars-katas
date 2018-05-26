const dnaToRna = require('.')

test('Test 1', () => {
  expect(dnaToRna('TTTT')).toBe('UUUU')
})

test('Test 2', () => {
  expect(dnaToRna('GCAT')).toBe('GCAU')
})

test('Test 3', () => {
  expect(dnaToRna('GACCGCCGCC')).toBe('GACCGCCGCC')
})
