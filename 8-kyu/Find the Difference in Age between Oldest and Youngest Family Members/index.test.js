const differenceInAges = require('.')

test('Test 1', () => {
  expect(differenceInAges([82, 15, 6, 38, 35])).toEqual([6, 82, 76])
})

test('Test 2', () => {
  expect(differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85])
})
