const { head, tail, init, last } = require('.')

test('Test 1', () => {
  expect(head([5, 1])).toBe(5)
})

test('Test 2', () => {
  expect(tail([1])).toEqual([])
})

test('Test 3', () => {
  expect(init([1, 5, 7, 9])).toEqual([1, 5, 7])
})

test('Test 4', () => {
  expect(last([7, 2])).toBe(2)
})
