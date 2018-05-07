const getEvenNumbers = require('./index.js')

test('Test 1', () => {
  expect(getEvenNumbers([2, 4, 5, 6])).toEqual([2, 4, 6])
})
