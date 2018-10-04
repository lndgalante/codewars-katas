const numberProperty = require('.')

test('Test 1', () => {
  expect(numberProperty(-10)).toEqual([false, true, true])
})

test('Test 2', () => {
  expect(numberProperty(2)).toEqual([true, true, false])
})

test('Test 3', () => {
  expect(numberProperty(120)).toEqual([false, true, true])
})

test('Test 4', () => {
  expect(numberProperty(125)).toEqual([false, false, false])
})
