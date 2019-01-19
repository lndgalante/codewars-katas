const describeList = require('.')

test('Test 1', () => {
  expect(describeList([])).toBe('empty')
})

test('Test 2', () => {
  expect(describeList([1])).toBe('singleton')
})

test('Test 3', () => {
  expect(describeList([1, 2])).toBe('longer')
})

test('Test 4', () => {
  expect(describeList([])).toBe('empty')
})

test('Test 5', () => {
  expect(describeList([1.5])).toBe('singleton')
})
