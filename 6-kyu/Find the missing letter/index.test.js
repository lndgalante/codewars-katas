const findMissingLetter = require('./index')

test('Test 1', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toEqual('e')
})

test('Test 2', () => {
  expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toEqual('P')
})
