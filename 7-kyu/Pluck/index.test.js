const pluck = require('.')

test('Test 1', () => {
  expect(pluck([{ a: 1 }, { a: 2 }], 'a')).toEqual([1, 2])
})
