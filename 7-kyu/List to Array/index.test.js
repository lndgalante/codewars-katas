const listToArray = require('.')

test('Test 1', () => {
  expect(
    listToArray({
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    })
  ).toEqual([1, 2, 3])
})

test('Test 2', () => {
  expect(
    listToArray({ value: 'foo', next: { value: 'bar', next: null } })
  ).toEqual(['foo', 'bar'])
})
