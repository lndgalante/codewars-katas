const solution = require('./index.js')

test('Test 1', () => {
  expect(solution('abc')).toEqual(['ab', 'c_'])
})

test('Test 2', () => {
  expect(solution('abcdef')).toEqual(['ab', 'cd', 'ef'])
})
