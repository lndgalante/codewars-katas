const charFreq = require('.')

test('Test 1', () => {
  expect(charFreq('I like cats')).toEqual({
    a: 1,
    ' ': 2,
    c: 1,
    e: 1,
    I: 1,
    k: 1,
    l: 1,
    i: 1,
    s: 1,
    t: 1,
  })
})
