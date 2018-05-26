const litres = require('.')

test('Test 1', () => {
  expect(litres(2)).toBe(1)
})

test('Test 2', () => {
  expect(litres(1.4)).toBe(0)
})

test('Test 3', () => {
  expect(litres(12.3)).toBe(6)
})

test('Test 4', () => {
  expect(litres(0.82)).toBe(0)
})

test('Test 5', () => {
  expect(litres(11.8)).toBe(5)
})

test('Test 6', () => {
  expect(litres(1787)).toBe(893)
})

test('Test 7', () => {
  expect(litres(0)).toBe(0)
})
