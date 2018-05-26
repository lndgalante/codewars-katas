const SequenceSum = require('.')

test('Test 1', () => {
  expect(SequenceSum.showSequence(6)).toBe('0+1+2+3+4+5+6 = 21')
})
