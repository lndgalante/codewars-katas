const findNb = require('.')

test('Test 1', () => {
  expect(findNb(1071225)).toBe(45)
})

test('Test 2', () => {
  expect(findNb(91716553919377)).toBe(-1)
})

test('Test 3', () => {
  expect(findNb(4183059834009)).toBe(2022)
})

test('Test 4', () => {
  expect(findNb(24723578342962)).toBe(-1)
})

test('Test 5', () => {
  expect(findNb(135440716410000)).toBe(4824)
})

test('Test 6', () => {
  expect(findNb(40539911473216)).toBe(3568)
})
