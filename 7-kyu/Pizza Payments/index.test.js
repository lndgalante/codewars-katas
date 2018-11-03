const michaelPays = require('.')

test('Test 1', () => {
  expect(michaelPays(15)).toBe(10)
})

test('Test 2', () => {
  expect(michaelPays(4)).toBe(4)
})

test('Test 3', () => {
  expect(michaelPays(30)).toBe(20)
})

test('Test 4', () => {
  expect(michaelPays(80)).toBe(70)
})

test('Test 5', () => {
  expect(michaelPays(22)).toBe(14.67)
})

test('Test 6', () => {
  expect(michaelPays(5.9181)).toBe(3.95)
})

test('Test 7', () => {
  expect(michaelPays(28.789)).toBe(19.19)
})

test('Test 8', () => {
  expect(michaelPays(4.325)).toBe(4.33)
})
