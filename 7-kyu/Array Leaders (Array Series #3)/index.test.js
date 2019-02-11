const arrayLeaders = require('.')

test('Test 1', () => {
  expect(arrayLeaders([1, 2, 3, 4, 0])).toEqual([4])
})

test('Test 2', () => {
  expect(arrayLeaders([16, 17, 4, 3, 5, 2])).toEqual([17, 5, 2])
})

test('Test 3', () => {
  expect(arrayLeaders([-1, -29, -26, -2])).toEqual([-1])
})

test('Test 4', () => {
  expect(arrayLeaders([-36, -12, -27])).toEqual([-36, -12])
})

test('Test 5', () => {
  expect(arrayLeaders([5, -2, 2])).toEqual([5, 2])
})

test('Test 6', () => {
  expect(arrayLeaders([0, -1, -29, 3, 2])).toEqual([0, -1, 3, 2])
})
