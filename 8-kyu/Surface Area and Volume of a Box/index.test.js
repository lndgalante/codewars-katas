const getSize = require('.')

test('Test 1', () => {
  expect(getSize(4, 2, 6)[1]).toBe(48)
})

test('Test 2', () => {
  expect(getSize(10, 10, 10)).toEqual([600, 1000])
})

test('Test 3', () => {
  expect(getSize(4, 2, 6)[0]).toBe(88)
})

test('Test 4', () => {
  expect(getSize(4, 2, 6)[1]).toBe(48)
})
