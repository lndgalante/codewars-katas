const pipeFix = require('.')

test('Test 1', () => {
  expect(pipeFix([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Test 2', () => {
  expect(pipeFix([1, 2, 3, 12])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ])
})

test('Test 3', () => {
  expect(pipeFix([6, 9])).toEqual([6, 7, 8, 9])
})

test('Test 4', () => {
  expect(pipeFix([-1, 4])).toEqual([-1, 0, 1, 2, 3, 4])
})

test('Test 5', () => {
  expect(pipeFix([1, 2, 3])).toEqual([1, 2, 3])
})
