const onlyOne = require('.')

test('Test 1', () => {
  expect(onlyOne(true, false)).toBeTrue()
})
