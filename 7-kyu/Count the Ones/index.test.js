const hammingWeight = require('.')

test('Test 1', () => {
  expect(hammingWeight(10)).toBe(2)
})

test('Test 2', () => {
  expect(hammingWeight(21)).toBe(3)
})
