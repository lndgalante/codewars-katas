const mostFrequentItemCount = require('.')

test('Test 1', () => {
  expect(mostFrequentItemCount([3, -1, -1])).toBe(2)
})

test('Test 2', () => {
  expect(
    mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
  ).toBe(5)
})
