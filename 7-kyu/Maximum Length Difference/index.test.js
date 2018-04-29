const mxdiflg = require('./index.js')

test('Test 1', () => {
  expect(
    mxdiflg(
      [
        'hoqq',
        'bbllkw',
        'oox',
        'ejjuyyy',
        'plmiis',
        'xxxzgpsssa',
        'xxwwkktt',
        'znnnnfqknaz',
        'qqquuhii',
        'dvvvwz',
      ],
      ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
    )
  ).toBe(13)
})
