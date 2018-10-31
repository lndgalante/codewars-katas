const span = require('.')

test('Test 1', () => {
  const isEven = x => Math.abs(x) % 2 === 0
  expect(span([2, 4, 6, 1, 4, 8], isEven)).toEqual([[2, 4, 6], [1, 4, 8]])
})

test('Test 2', () => {
  const isOdd = x => Math.abs(x) % 2 !== 0
  expect(span([13, 17, 19, 11, 21], isOdd)).toEqual([[13, 17, 19, 11, 21], []])
})
