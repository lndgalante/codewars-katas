const NameMe = require('.')

test('Test 1', () => {
  const n = new NameMe('John', 'Doe')
  expect(n.name).toBe('John Doe')
})
