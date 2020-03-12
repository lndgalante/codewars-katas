const split = require('.')

test('Test 1', () => {
  const object1 = { prop: true }
  const object2 = { prop: false }

  expect(split([object1, object2], 'prop')).toEqual([[object1], [object2]])
})
