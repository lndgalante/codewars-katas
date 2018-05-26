const solution = require('.')

test('Test 1', () => {
  expect(solution([1, 2, 10, 50, 5])).toEqual([1, 2, 5, 10, 50])
})

test('Test 2', () => {
  expect(solution(null)).toEqual([])
})
