const seqlist = require('.')

test('Test 1', () => {
  expect(seqlist(0, 1, 20)).toEqual([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ])
})
