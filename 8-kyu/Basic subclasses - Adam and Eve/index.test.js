const { God, Man, Woman } = require('.')

test('Test 1', () => {
  const humans = God.create()
  expect(humans[0] instanceof Man).toBeTrue()
})

test('Test 2', () => {
  const humans = God.create()
  expect(humans[1] instanceof Woman).toBeTrue()
})
