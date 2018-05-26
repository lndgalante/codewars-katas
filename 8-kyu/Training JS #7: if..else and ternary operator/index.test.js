const saleHotDogs = require('.')

test('Test 1', () => {
  expect(saleHotDogs(1)).toBe(100)
})

test('Test 2', () => {
  expect(saleHotDogs(4)).toBe(400)
})

test('Test 3', () => {
  expect(saleHotDogs(5)).toBe(475)
})

test('Test 4', () => {
  expect(saleHotDogs(9)).toBe(855)
})

test('Test 5', () => {
  expect(saleHotDogs(10)).toBe(900)
})

test('Test 6', () => {
  expect(saleHotDogs(100)).toBe(9000)
})
