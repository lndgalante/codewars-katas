const countSheep = require('.')

test('Test 1', () => {
  expect(countSheep(1)).toBe('1 sheep...')
})

test('Test 2', () => {
  expect(countSheep(2)).toBe('1 sheep...2 sheep...')
})

test('Test 3', () => {
  expect(countSheep(3)).toBe('1 sheep...2 sheep...3 sheep...')
})
