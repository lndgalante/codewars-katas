const persistence = require('./index')

test('Test 1', () => {
  expect(persistence(39)).toBe(3)
})

test('Test 2', () => {
  expect(persistence(4)).toBe(0)
})

test('Test 3', () => {
  expect(persistence(25)).toBe(2)
})

test('Test 4', () => {
  expect(persistence(999)).toBe(4)
})
