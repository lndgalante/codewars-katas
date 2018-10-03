const summy = require('.')

test('Test 1', () => {
  expect(summy('1 2 3')).toBe(6)
})

test('Test 2', () => {
  expect(summy('1 2 3 4')).toBe(10)
})

test('Test 3', () => {
  expect(summy('1 2 3 4 5')).toBe(15)
})

test('Test 4', () => {
  expect(summy('10 10')).toBe(20)
})

test('Test 5', () => {
  expect(summy('0 0')).toBe(0)
})
