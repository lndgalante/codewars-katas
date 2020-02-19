const sc = require('.')

test('Test 1', () => {
  expect(sc(6)).toEqual([1, 2, 3, 6])
})

test('Test 2', () => {
  expect(sc(15)).toEqual([1, 3, 15])
})

test('Test 3', () => {
  expect(sc(100)).toEqual([1, 2, 4, 25, 50, 100])
})

test('Test 4', () => {
  expect(sc(1659)).toEqual([1, 3, 7, 79, 1659])
})

test('Test 5', () => {
  expect(sc(2547)).toEqual([1, 3, 9, 2547])
})

test('Test 6', () => {
  expect(sc(3800)).toEqual([1, 2, 4, 5, 8, 475, 950, 1900, 3800])
})

test('Test 7', () => {
  expect(sc(6112)).toEqual([1, 2, 4, 8, 16, 32, 191, 382, 764, 1528, 3056, 6112])
})
