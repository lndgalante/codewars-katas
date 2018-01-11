const titleCase = require('./index.js')

test('Test 1', () => {
  expect(titleCase('a clash of KINGS', 'a an the of')).toBe('A Clash of Kings')
})

test('Test 2', () => {
  expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe(
    'The Wind in the Willows'
  )
})

test('Test 3', () => {
  expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox')
})
