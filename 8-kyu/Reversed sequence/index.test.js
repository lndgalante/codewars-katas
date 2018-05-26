const reverseSeq = require('.')

test('Test 1', () => {
  expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1])
})
