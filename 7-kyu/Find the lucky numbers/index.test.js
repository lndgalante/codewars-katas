const filterLucky = require('.')

test('Test 1', () => {
  expect(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])).toEqual([
    7,
    70,
    17,
  ])
})

test('Test 2', () => {
  expect(filterLucky([71, 9907, 69])).toEqual([71, 9907])
})
