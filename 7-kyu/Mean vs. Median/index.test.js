const meanVsMedian = require('.')

test('Test 1', () => {
  expect(meanVsMedian([1, 1, 1])).toBe('same')
})

test('Test 2', () => {
  expect(meanVsMedian([1, 2, 37])).toBe('mean')
})

test('Test 3', () => {
  expect(meanVsMedian([7, 14, -70])).toBe('median')
})
