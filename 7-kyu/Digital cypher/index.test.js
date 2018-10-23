const encode = require('.')

test('Test 1', () => {
  expect(encode('scout', 1939)).toEqual([20, 12, 18, 30, 21])
})

test('Test 2', () => {
  expect(encode('masterpiece', 1939)).toEqual([
    14,
    10,
    22,
    29,
    6,
    27,
    19,
    18,
    6,
    12,
    8,
  ])
})
