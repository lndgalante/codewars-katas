const dotCalculator = require('.')

test('Test 1', () => {
  expect(dotCalculator('..... + ...............')).toBe('....................')
})

test('Test 2', () => {
  expect(dotCalculator('..... - ...')).toBe('..')
})

test('Test 3', () => {
  expect(dotCalculator('..... - .')).toBe('....')
})

test('Test 4', () => {
  expect(dotCalculator('..... * ...')).toBe('...............')
})

test('Test 5', () => {
  expect(dotCalculator('..... * ..')).toBe('..........')
})

test('Test 6', () => {
  expect(dotCalculator('..... // ..')).toBe('..')
})

test('Test 7', () => {
  expect(dotCalculator('..... // .')).toBe('.....')
})

test('Test 8', () => {
  expect(dotCalculator('. // ..')).toBe('')
})

test('Test 9', () => {
  expect(dotCalculator('. - .')).toBe('')
})
