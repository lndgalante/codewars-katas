const getLargerNumbers = require('.')

test('Test 1', () => {
  const a = [13, 64, 15, 17, 88]
  const b = [23, 14, 53, 17, 80]

  expect(getLargerNumbers(a, b)).toEqual([23, 64, 53, 17, 88])
})

test('Test 2', () => {
  const a = [34, -64, 15, 17, 88]
  const b = [23, 14, 53, 17, 80]

  expect(getLargerNumbers(a, b)).toEqual([34, 14, 53, 17, 88])
})
