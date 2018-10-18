const solution = require('.')

test('Test 1', () => {
  expect(solution(20)).toEqual([5, 2, 1])
})

test('Test 2', () => {
  expect(solution(2)).toEqual([0, 0, 0])
})

test('Test 3', () => {
  expect(solution(14)).toEqual([4, 2, 0])
})

test('Test 4', () => {
  expect(solution(30)).toEqual([8, 4, 1])
})

test('Test 5', () => {
  expect(solution(141)).toEqual([37, 19, 9])
})
