const main = require('.')

test('Test 1', () => {
  expect(main('take ', 'item')).toBe('take item')
})

test('Test 2', () => {
  expect(main('use ', 'sword')).toBe('use sword')
})
