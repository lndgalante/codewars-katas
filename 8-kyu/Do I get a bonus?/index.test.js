const bonusTime = require('.')

test('Test 1', () => {
  expect(bonusTime(10000, true)).toBe('£100000')
})

test('Test 2', () => {
  expect(bonusTime(25000, true)).toBe('£250000')
})

test('Test 3', () => {
  expect(bonusTime(10000, false)).toBe('£10000')
})

test('Test 4', () => {
  expect(bonusTime(60000, false)).toBe('£60000')
})

test('Test 5', () => {
  expect(bonusTime(2, true)).toBe('£20')
})

test('Test 6', () => {
  expect(bonusTime(78, false)).toBe('£78')
})

test('Test 7', () => {
  expect(bonusTime(67890, true)).toBe('£678900')
})
