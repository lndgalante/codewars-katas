const removeDuplicateWords = require('.')

test('Test 1', () => {
  expect(
    removeDuplicateWords(
      'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
    )
  ).toBe('alpha beta gamma delta')
})
