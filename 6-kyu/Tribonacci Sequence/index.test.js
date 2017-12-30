const tribonacci = require('./index.js')

test('Test 1', () => {
  expect(tribonacci([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
})

test('Test 2', () => {
  expect(tribonacci([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
})

test('Test 3', () => {
  expect(tribonacci([0, 1, 1], 10)).toEqual([0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
})

test('Test 4', () => {
  expect(tribonacci([1, 0, 0], 10)).toEqual([1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
})

test('Test 5', () => {
  expect(tribonacci([1, 2, 3], 10)).toEqual([
    1,
    2,
    3,
    6,
    11,
    20,
    37,
    68,
    125,
    230,
  ])
})

test('Test 6', () => {
  expect(tribonacci([3, 2, 1], 10)).toEqual([
    3,
    2,
    1,
    6,
    9,
    16,
    31,
    56,
    103,
    190,
  ])
})

test('Test 7', () => {
  expect(tribonacci([1, 1, 1], 1)).toEqual([1])
})

test('Test 8', () => {
  expect(tribonacci([300, 200, 100], 0)).toEqual([])
})

test('Test 9', () => {
  expect(tribonacci([0.5, 0.5, 0.5], 30)).toEqual([
    0.5,
    0.5,
    0.5,
    1.5,
    2.5,
    4.5,
    8.5,
    15.5,
    28.5,
    52.5,
    96.5,
    177.5,
    326.5,
    600.5,
    1104.5,
    2031.5,
    3736.5,
    6872.5,
    12640.5,
    23249.5,
    42762.5,
    78652.5,
    144664.5,
    266079.5,
    489396.5,
    900140.5,
    1655616.5,
    3045153.5,
    5600910.5,
    10301680.5,
  ])
})
