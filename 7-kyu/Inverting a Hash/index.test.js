const invertHash = require('.')

test('Test 1', () => {
  expect(invertHash({ hello: 'world' })).toEqual({ world: 'hello' })
})

test('Test 2', () => {
  expect(invertHash({ a: '1', b: '2', c: '3' })).toEqual({ 1: 'a', 2: 'b', 3: 'c' })
})
