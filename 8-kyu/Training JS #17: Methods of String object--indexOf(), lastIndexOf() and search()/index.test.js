const firstToLast = require('.')

test('Test 1', () => {
  expect(firstToLast('ababc', 'a')).toBe(2)
})

test('Test 2', () => {
  expect(firstToLast('ababc', 'c')).toBe(0)
})

test('Test 3', () => {
  expect(firstToLast('ababc', 'd')).toBe(-1)
})
