const nextHappyYear = require('.')

test('Test 1', () => {
  expect(nextHappyYear(1001)).toBe(1023)
})

test('Test 2', () => {
  expect(nextHappyYear(1123)).toBe(1203)
})

test('Test 3', () => {
  expect(nextHappyYear(2001)).toBe(2013)
})

test('Test 4', () => {
  expect(nextHappyYear(2334)).toBe(2340)
})

test('Test 5', () => {
  expect(nextHappyYear(3331)).toBe(3401)
})

test('Test 6', () => {
  expect(nextHappyYear(1987)).toBe(2013)
})

test('Test 7', () => {
  expect(nextHappyYear(5555)).toBe(5601)
})

test('Test 8', () => {
  expect(nextHappyYear(7712)).toBe(7801)
})

test('Test 9', () => {
  expect(nextHappyYear(8088)).toBe(8091)
})

test('Test 10', () => {
  expect(nextHappyYear(8999)).toBe(9012)
})
