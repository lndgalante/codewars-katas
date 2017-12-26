const dnaStrand = require('./index.js')

test('Test 1', () => {
  expect(dnaStrand('AAAA')).toBe('TTTT')
})

test('Test 2', () => {
  expect(dnaStrand('ATTGC')).toBe('TAACG')
})

test('Test 3', () => {
  expect(dnaStrand('GTAT')).toBe('CATA')
})
