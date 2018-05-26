const superSize = require('.')

test('Test 1', () => {
  expect(superSize(69)).toBe(96)
})

test('Test 2', () => {
  expect(superSize(513)).toBe(531)
})

test('Test 3', () => {
  expect(superSize(2017)).toBe(7210)
})

test('Test 4', () => {
  expect(superSize(414)).toBe(441)
})

test('Test 5', () => {
  expect(superSize(608719)).toBe(987610)
})

test('Test 6', () => {
  expect(superSize(123456789)).toBe(987654321)
})

test('Test 7', () => {
  expect(superSize(700000000001)).toBe(710000000000)
})

test('Test 8', () => {
  expect(superSize(666666)).toBe(666666)
})

test('Test 9', () => {
  expect(superSize(2)).toBe(2)
})
