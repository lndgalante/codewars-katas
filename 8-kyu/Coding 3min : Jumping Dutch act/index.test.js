const sc = require('.')

test('Test 1', () => {
  expect(sc(2)).toBe('Aa~ Pa! Aa!')
})

test('Test 2', () => {
  expect(sc(6)).toBe('Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!')
})

test('Test 3', () => {
  expect(sc(7)).toBe('Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!')
})

test('Test 4', () => {
  expect(sc(10)).toBe('Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!')
})

test('Test 5', () => {
  expect(sc(1)).toBe('')
})

test('Test 6', () => {
  expect(sc(-1)).toBe('')
})
