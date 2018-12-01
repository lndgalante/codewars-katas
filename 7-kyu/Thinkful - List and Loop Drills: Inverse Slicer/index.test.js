const inverseSlice = require('.')

test('Test 1', () => {
  expect(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4)).toEqual([12, 14, 55, 24])
})

test('Test 2', () => {
  expect(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3)).toEqual([72, 55, 24])
})

test('Test 3', () => {
  expect(
    inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13)
  ).toEqual(['Intuition', 'is', 'a', 'poor', 'guide'])
})
