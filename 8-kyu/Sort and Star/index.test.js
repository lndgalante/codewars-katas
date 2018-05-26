const twoSort = require('.')

test('Test 1', () => {
  expect(
    twoSort([
      'bitcoin',
      'take',
      'over',
      'the',
      'world',
      'maybe',
      'who',
      'knows',
      'perhaps',
    ])
  ).toBe('b***i***t***c***o***i***n')
})

test('Test 2', () => {
  expect(
    twoSort([
      'turns',
      'out',
      'random',
      'test',
      'cases',
      'are',
      'easier',
      'than',
      'writing',
      'out',
      'basic',
      'ones',
    ])
  ).toBe('a***r***e')
})
