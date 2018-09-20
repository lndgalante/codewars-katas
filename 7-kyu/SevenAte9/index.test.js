const sevenAte9 = require('.')

test('Test 1', () => {
  expect(sevenAte9('165561786121789797')).toBe('16556178612178977')
})

test('Test 2', () => {
  expect(sevenAte9('797')).toBe('77')
})

test('Test 3', () => {
  expect(sevenAte9('7979797')).toBe('7777')
})
