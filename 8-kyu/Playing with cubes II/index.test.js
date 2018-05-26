const Cube = require('.')

test('Test 1', () => {
  const c = new Cube(10)
  expect(c.getSide()).toBe(10)
})

test('Test 2', () => {
  const c = new Cube()
  expect(c.getSide()).toBe(0)
})
