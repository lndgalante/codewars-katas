const search = require('.')

test('Test 1', () => {
  expect(search(3, [6, 1, 2, 9, 2])).toBe('1,2,2')
})

test('Test 2', () => {
  expect(search(14, [7, 3, 23, 9, 14, 20, 7])).toBe('3,7,7,9,14')
})

test('Test 3', () => {
  expect(search(0, [6, 1, 2, 9, 2])).toBe('')
})
