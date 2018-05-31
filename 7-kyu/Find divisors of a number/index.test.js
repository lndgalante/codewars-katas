const getDivisorCnt = require('.')

test('Test 1', () => {
  expect(getDivisorCnt(1)).toBe(1)
})

test('Test 2', () => {
  expect(getDivisorCnt(10)).toBe(4)
})

test('Test 3', () => {
  expect(getDivisorCnt(11)).toBe(2)
})

test('Test 4', () => {
  expect(getDivisorCnt(54)).toBe(8)
})
