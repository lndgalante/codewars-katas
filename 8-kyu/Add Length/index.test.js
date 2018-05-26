const addLength = require('.')

test('Test 1', () => {
  expect(addLength('apple ban')).toEqual(['apple 5', 'ban 3'])
})

test('Test 2', () => {
  expect(addLength('you will win')).toEqual(['you 3', 'will 4', 'win 3'])
})
