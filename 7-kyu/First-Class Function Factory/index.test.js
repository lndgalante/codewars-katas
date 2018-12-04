const factory = require('.')

test('Test 1', () => {
  const myArray = [1, 2, 3]
  const threes = factory(3)

  expect(threes(myArray)).toEqual([3, 6, 9])
})

test('Test 2', () => {
  const myArray = [1, 2, 3]
  const fives = factory(5)

  expect(fives(myArray)).toEqual([5, 10, 15])
})
