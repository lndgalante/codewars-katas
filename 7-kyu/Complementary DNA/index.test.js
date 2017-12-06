const DNAStrand = require('./index.js')

test('Test 1', () => {
  expect(DNAStrand('AAAA')).toBe('TTTT')
})

test('Test 2', () => {
  expect(DNAStrand('ATTGC')).toBe('TAACG')
})

test('Test 3', () => {
  expect(DNAStrand('GTAT')).toBe('CATA')
})
