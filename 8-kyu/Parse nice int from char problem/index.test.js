const getAge = require('.')

test('Test 1', () => {
  expect(getAge('1 year old')).toBe(1)
})

test('Test 2', () => {
  expect(getAge('5 years old')).toBe(5)
})
