const twiceAsOld = require('.')

test('Test 1', () => {
  expect(twiceAsOld(36, 7)).toBe(22)
})

test('Test 2', () => {
  expect(twiceAsOld(55, 30)).toBe(5)
})

test('Test 3', () => {
  expect(twiceAsOld(42, 21)).toBe(0)
})

test('Test 4', () => {
  expect(twiceAsOld(22, 1)).toBe(20)
})

test('Test 5', () => {
  expect(twiceAsOld(29, 0)).toBe(29)
})
