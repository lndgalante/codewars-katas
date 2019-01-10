const freqSeq = require('.')

test('Test 1', () => {
  expect(freqSeq('hello world', '-')).toBe('1-1-3-3-2-1-1-2-1-3-1')
})

test('Test 2', () => {
  expect(freqSeq('19999999', ':')).toBe('1:7:7:7:7:7:7:7')
})

test('Test 3', () => {
  expect(freqSeq('^^^**$', 'x')).toBe('3x3x3x2x2x1')
})
