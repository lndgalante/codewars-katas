const { getLength, getFirst, pushElement, popElement } = require('.')

test('Test 1', () => {
  expect(getLength([1, 2, 3])).toBe(3)
})

test('Test 2', () => {
  expect(getFirst([1, 2, 3])).toBe(1)
})

test('Test 3', () => {
  expect(pushElement([1, 2, 3])).toBeArrayOfSize(4)
})

test('Test 4', () => {
  expect(popElement([1, 2, 3])).toBeArrayOfSize(2)
})
