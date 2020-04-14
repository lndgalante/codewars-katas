const geometricSequenceElements = require('.')

test('Test 1', () => {
  expect(geometricSequenceElements(2, 3, 5)).toBe('2, 6, 18, 54, 162')
})

test('Test 2', () => {
  expect(geometricSequenceElements(2, 2, 10)).toBe('2, 4, 8, 16, 32, 64, 128, 256, 512, 1024')
})
