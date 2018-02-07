const items = require('./index.js')

test('Test 1', () => {
  expect(items).toEqual([{ a: 'b', c: 'd' }])
})
