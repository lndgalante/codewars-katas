const climb = require('.')

test('Test 1', () => {
  expect(climb(1)).toEqual([1])
})

test('Test 2', () => {
  expect(climb(10)).toEqual([1, 2, 5, 10])
})

test('Test 3', () => {
  expect(climb(13)).toEqual([1, 3, 6, 13])
})

