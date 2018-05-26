const Ball = require('.')

test('Test 1', () => {
  expect(new Ball().ballType).toBe('regular')
})

test('Test 2', () => {
  expect(new Ball('super').ballType).toBe('super')
})
