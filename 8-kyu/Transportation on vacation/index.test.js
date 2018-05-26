const rentalCarCost = require('.')

test('Test 1', () => {
  expect(rentalCarCost(1)).toBe(40)
})

test('Test 2', () => {
  expect(rentalCarCost(2)).toBe(80)
})

test('Test 3', () => {
  expect(rentalCarCost(3)).toBe(100)
})

test('Test 4', () => {
  expect(rentalCarCost(4)).toBe(140)
})

test('Test 5', () => {
  expect(rentalCarCost(5)).toBe(180)
})

test('Test 6', () => {
  expect(rentalCarCost(6)).toBe(220)
})

test('Test 7', () => {
  expect(rentalCarCost(7)).toBe(230)
})

test('Test 8', () => {
  expect(rentalCarCost(8)).toBe(270)
})

test('Test 9', () => {
  expect(rentalCarCost(9)).toBe(310)
})

test('Test 10', () => {
  expect(rentalCarCost(10)).toBe(350)
})
