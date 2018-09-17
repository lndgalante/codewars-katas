const product = require('.')

test('Test 1', () => {
  expect(product('')).toBe(0)
})

test('Test 2', () => {
  expect(product('!')).toBe(0)
})

test('Test 3', () => {
  expect(product('!!')).toBe(0)
})

test('Test 4', () => {
  expect(product('!??')).toBe(2)
})

test('Test 5', () => {
  expect(product('!???')).toBe(3)
})

test('Test 6', () => {
  expect(product('!!!??')).toBe(6)
})

test('Test 7', () => {
  expect(product('!!!???')).toBe(9)
})

test('Test 8', () => {
  expect(product('!???!!')).toBe(9)
})

test('Test 9', () => {
  expect(product('!????!!!?')).toBe(20)
})
