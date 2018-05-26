const solution = require('.')

test('Test 1', () => {
  expect(solution({ a: 1, b: '2' })).toBe('a = 1,b = 2')
})

test('Test 2', () => {
  expect(solution({ b: 1, c: 2, e: 3 })).toBe('b = 1,c = 2,e = 3')
})
