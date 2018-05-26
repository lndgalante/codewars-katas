const countSheeps = require('.')

test('Test 1', () => {
  expect(
    countSheeps([
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ])
  ).toBe(17)
})

test('Test 2', () => {
  expect(countSheeps([true, true, true, false, false, false, true, true])).toBe(
    5
  )
})
