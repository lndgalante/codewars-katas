const { dad, bee, banana } = require('.')

test('Test 1', () => {
  expect(dad()).toBe('Dad')
})

test('Test 2', () => {
  expect(bee()).toBe('Bee')
})

test('Test 3', () => {
  expect(banana()).toBe('banana')
})
