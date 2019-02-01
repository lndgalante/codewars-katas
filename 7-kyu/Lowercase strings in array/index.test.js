const arrayLowerCase = require('.')

test('Test 1', () => {
  expect(arrayLowerCase(['Red', 'Green'])).toEqual(['red', 'green'])
})

test('Test 2', () => {
  expect(arrayLowerCase([1, 'Green'])).toEqual([1, 'green'])
})
