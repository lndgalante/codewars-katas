const solve = require('.')

test('Test 1', () => {
  expect(solve([47, 7, 2], [47, 7, 2])).toBe('0, 0: that looks like a "draw"! Rock on!')
})

test('Test 2', () => {
  expect(solve([47, 67, 22], [26, 47, 12])).toBe('3, 0: Alice made "Kurt" proud!')
})

test('Test 3', () => {
  expect(solve([25, 50, 22], [34, 49, 50])).toBe('1, 2: Bob made "Jeff" proud!')
})
