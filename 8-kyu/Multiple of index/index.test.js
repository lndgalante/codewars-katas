const multipleOfIndex = require('.')

test('Test 1', () => {
  expect(multipleOfIndex([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25])
})

test('Test 2', () => {
  expect(multipleOfIndex([68, -1, 1, -7, 10, 10])).toEqual([-1, 10])
})

test('Test 3', () => {
  expect(multipleOfIndex([11, -11])).toEqual([-11])
})

test('Test 4', () => {
  expect(
    multipleOfIndex([
      -56,
      -85,
      72,
      -26,
      -14,
      76,
      -27,
      72,
      35,
      -21,
      -67,
      87,
      0,
      21,
      59,
      27,
      -92,
      68,
    ])
  ).toEqual([-85, 72, 0, 68])
})

test('Test 5', () => {
  expect(multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51])).toEqual([
    38,
    -44,
    -99,
  ])
})

test('Test 6', () => {
  expect(multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35])).toEqual([
    -49,
    8,
    -60,
    35,
  ])
})
