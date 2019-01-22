const sign = require('.')

test('Test 1', () => {
  expect(sign(3)).toBe(1)
})

test('Test 2', () => {
  expect(sign(-3)).toBe(-1)
})

test('Test 3', () => {
  expect(sign('-3')).toBe(-1)
})

test('Test 4', () => {
  expect(sign(0)).toBe(0)
})

test('Test 5', () => {
  expect(sign(NaN)).toBeNaN()
})

test('Test 6', () => {
  expect(sign('foo')).toBeNaN()
})

test('Test 7', () => {
  expect(sign()).toBeNaN()
})
