const Dinglemouse = require('.')

test('Test 1', () => {
  const dingleMouse = new Dinglemouse('Clint', 'Eastwood')

  expect(dingleMouse.getFullName()).toBe('Clint Eastwood')
})
