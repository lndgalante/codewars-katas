const helpZoom = require('.')

test('Test 1', () => {
  expect(helpZoom([1, 1, 0, 0, 0, 0, 0, 1, 1])).toEqual('Yes')
})

test('Test 2', () => {
  expect(helpZoom([1, 1, 0, 0, 0, 0, 1, 1, 0])).toEqual('No')
})
