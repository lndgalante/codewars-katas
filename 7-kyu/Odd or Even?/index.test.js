const oddOrEven = require('./index.js')

test('Edge tests', () => {
  expect(oddOrEven([0])).toBe('even')
  expect(oddOrEven([1])).toBe('odd')
  expect(oddOrEven([])).toBe('even')
})

test('Even tests', () => {
  expect(oddOrEven([0, 1, 5])).toBe('even')
  expect(oddOrEven([0, 1, 3])).toBe('even')
  expect(oddOrEven([1023, 1, 2])).toBe('even')
})

test('Negative Even tests', () => {
  expect(oddOrEven([0, -1, -5])).toBe('even')
  expect(oddOrEven([0, -1, -3])).toBe('even')
  expect(oddOrEven([-1023, 1, -2])).toBe('even')
})

test('Odd tests', () => {
  expect(oddOrEven([0, 1, 2])).toBe('odd')
  expect(oddOrEven([0, 1, 4])).toBe('odd')
  expect(oddOrEven([1023, 1, 3])).toBe('odd')
})

test('Negative Odd tests', () => {
  expect(oddOrEven([0, -1, 2])).toBe('odd')
  expect(oddOrEven([0, 1, -4])).toBe('odd')
  expect(oddOrEven([-1023, -1, 3])).toBe('odd')
})
