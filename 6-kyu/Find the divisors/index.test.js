const divisors = require('./index')

test('Test 1', () => {
  expect(divisors(12)).toEqual([2, 3, 4, 6])
})

test('Test 2', () => {
  expect(divisors(15)).toEqual([3, 5])
})

test('Test 3', () => {
  expect(divisors(13)).toBe('13 is prime')
})

test('Test 4', () => {
  expect(divisors(25)).toEqual([5])
})

test('Test 5', () => {
  expect(divisors(49)).toEqual([7])
})

test('Test 6', () => {
  expect(divisors(253)).toEqual([11, 23])
})

test('Test 7', () => {
  expect(divisors(3)).toBe('3 is prime')
})
