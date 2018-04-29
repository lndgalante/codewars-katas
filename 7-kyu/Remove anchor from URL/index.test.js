const solution = require('./index.js')

test('Test 1', () => {
  expect(solution('www.codewars.com#about')).toBe('www.codewars.com')
})
