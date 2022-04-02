const stickyCalc = require('.')

test('Test 1', () => {
  expect(stickyCalc('+', 4, 7)).toBe(54)
})

test('Test 2', () => {
  expect(stickyCalc('-', 15, 10)).toBe(1500)
})

test('Test 3', () => {
  expect(stickyCalc('*', 5, 5)).toBe(275)
})

test('Test 4', () => {
  expect(stickyCalc('/', 10, 7)).toBe(15)
})

test('Test 5', () => {
  expect(stickyCalc('/', 10, 7)).toBe(15)
})

test('Test 6', () => {
  expect(stickyCalc('/', 10, 7)).toBe(15)
})
