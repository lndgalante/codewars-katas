const recycleMe = require('.')

test('Test 1', () => {
  expect(recycleMe([5, -9, 0, 6, -84, -95, 15])).toEqual([3, 3, 1])
})

test('Test 2', () => {
  expect(recycleMe([45, -26, -4, -66, -84, -38, 14])).toEqual([2, 5, 0])
})
