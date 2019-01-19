const toInitials = require('.')

test('Test 1', () => {
  expect(toInitials('Kerry King')).toEqual('K. K.')
})

test('Test 2', () => {
  expect(toInitials('Tom Araya')).toEqual('T. A.')
})
