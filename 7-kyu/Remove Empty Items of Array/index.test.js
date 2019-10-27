/* eslint no-sparse-arrays:0 */

const clean = require('.')

test('Test 1', () => {
  expect(clean([])).toEqual([])
})

test('Test 2', () => {
  expect(clean(new Array(500000))).toEqual([])
})

test('Test 3', () => {
  expect(clean([1, 2])).toEqual([1, 2])
})

test('Test 4', () => {
  expect(clean([1, 2, , , 3, 4])).toEqual([1, 2, 3, 4])
})

test('Test 5', () => {
  expect(clean([1, 2, [], , 3])).toEqual([1, 2, [], 3])
})

test('Test 6', () => {
  expect(clean([undefined, null, NaN, false, '', 0])).toEqual([undefined, null, NaN, false, '', 0])
})

test('Test 7', () => {
  expect(clean([undefined, , , , null, , NaN, , false, '', 4, 3, 2, 1, 0])).toEqual([
    undefined,
    null,
    NaN,
    false,
    '',
    4,
    3,
    2,
    1,
    0,
  ])
})
