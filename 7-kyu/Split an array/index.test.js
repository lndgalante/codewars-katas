const split = require('.')

test('Test 1', () => {
  const obj1 = { prop: true }
  const obj2 = { prop: false }

  expect(split([obj1, obj2], 'prop')).toEqual([[obj1], [obj2]])
})
