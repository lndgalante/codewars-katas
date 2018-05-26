const reverseList = require('.')

test('Test 1', () => {
  expect(reverseList([1, 2, 3, 4])).toEqual([4, 3, 2, 1])
})

test('Test 2', () => {
  expect(reverseList([3, 1, 5, 4])).toEqual([4, 5, 1, 3])
})
