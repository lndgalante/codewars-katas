const sortByLength = require('.')

test('Test 1', () => {
  expect(sortByLength(['Beg', 'Life', 'I', 'To'])).toEqual([
    'I',
    'To',
    'Beg',
    'Life',
  ])
})

test('Test 2', () => {
  expect(sortByLength(['', 'Moderately', 'Brains', 'Pizza'])).toEqual([
    '',
    'Pizza',
    'Brains',
    'Moderately',
  ])
})

test('Test 3', () => {
  expect(sortByLength(['Longer', 'Longest', 'Short'])).toEqual([
    'Short',
    'Longer',
    'Longest',
  ])
})
