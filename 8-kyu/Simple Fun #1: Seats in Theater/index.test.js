const seatsInTheater = require('.')

test('Test 1', () => {
  expect(seatsInTheater(16, 11, 5, 3)).toBe(96)
})

test('Test 2', () => {
  expect(seatsInTheater(1, 1, 1, 1)).toBe(0)
})

test('Test 3', () => {
  expect(seatsInTheater(13, 6, 8, 3)).toBe(18)
})

test('Test 4', () => {
  expect(seatsInTheater(60, 100, 60, 1)).toBe(99)
})

test('Test 5', () => {
  expect(seatsInTheater(1000, 1000, 1000, 1000)).toBe(0)
})
