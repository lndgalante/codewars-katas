const reverseList = require('.')

test('Test 1', () => {
  expect(reverseList([])).toEqual([])
})

test('Test 2', () => {
  expect(reverseList([1, 2, 3])).toEqual([3, 2, 1])
})
