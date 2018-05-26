const stringToArray = require('.')

test('Test 1', () => {
  expect(stringToArray('Robin Singh')).toEqual(['Robin', 'Singh'])
})

test('Test 2', () => {
  expect(stringToArray('I love arrays they are my favorite')).toEqual([
    'I',
    'love',
    'arrays',
    'they',
    'are',
    'my',
    'favorite',
  ])
})
