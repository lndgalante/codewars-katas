const items = require('.')

test('Test 1', () => {
  expect(items).toEqual([{ a: 'b', c: 'd' }])
})
