const unluckyDays = require('.')

test('Test 1', () => {
  expect(unluckyDays(1586)).toBe(1)
})

test('Test 2', () => {
  expect(unluckyDays(1001)).toBe(3)
})

test('Test 3', () => {
  expect(unluckyDays(2819)).toBe(2)
})

test('Test 4', () => {
  expect(unluckyDays(2792)).toBe(2)
})

test('Test 5', () => {
  expect(unluckyDays(2723)).toBe(2)
})

test('Test 6', () => {
  expect(unluckyDays(1909)).toBe(1)
})

test('Test 7', () => {
  expect(unluckyDays(1812)).toBe(2)
})

test('Test 8', () => {
  expect(unluckyDays(1618)).toBe(2)
})

test('Test 9', () => {
  expect(unluckyDays(2132)).toBe(1)
})

test('Test 10', () => {
  expect(unluckyDays(2065)).toBe(3)
})
