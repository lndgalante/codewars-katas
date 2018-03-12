const templeStrings = require('./index.js')

test('Test 1', () => {
  expect(templeStrings('Animals', 'Good')).toBe('Animals are Good')
})
