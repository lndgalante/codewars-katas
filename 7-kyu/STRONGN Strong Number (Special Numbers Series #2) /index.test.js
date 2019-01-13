const strong = require('.')

test('Test 1', () => {
  expect(strong(1)).toBe('STRONG!!!!')
})

test('Test 2', () => {
  expect(strong(2)).toBe('STRONG!!!!')
})

test('Test 3', () => {
  expect(strong(145)).toBe('STRONG!!!!')
})

test('Test 4', () => {
  expect(strong(7)).toBe('Not Strong !!')
})

test('Test 5', () => {
  expect(strong(93)).toBe('Not Strong !!')
})

test('Test 6', () => {
  expect(strong(185)).toBe('Not Strong !!')
})
