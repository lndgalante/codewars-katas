const digitalRoot = require('.')

test('Test 1', () => {
  expect(digitalRoot(4)).toBe(4)
})

test('Test 2', () => {
  expect(digitalRoot(16)).toBe(7)
})

test('Test 3', () => {
  expect(digitalRoot(942)).toBe(6)
})

test('Test 4', () => {
  expect(digitalRoot(132189)).toBe(6)
})

test('Test 5', () => {
  expect(digitalRoot(493193)).toBe(2)
})
