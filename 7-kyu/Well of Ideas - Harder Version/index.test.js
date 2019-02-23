const well = require('.')

test('Test 1', () => {
  expect(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']])).toBe('Fail!')
})

test('Test 2', () => {
  expect(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']])).toBe(
    'Publish!'
  )
})

test('Test 3', () => {
  expect(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])).toBe('I smell a series!')
})
