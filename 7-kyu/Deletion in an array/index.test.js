const deleteValues = require('.')

test('Test 1', () => {
  const isEven = n => n % 2 === 0
  expect(deleteValues([1, 3, 2, 4, 5, 7, 6, 8, 10, 9], isEven)).toEqual([1, 3, 5, 7, 9])
})
