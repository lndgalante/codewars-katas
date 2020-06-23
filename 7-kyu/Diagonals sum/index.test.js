const sum = require('.')

test('Test 1', () => {
  expect(
    sum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toBe(1 + 5 + 9 + 3 + 5 + 7)
})
