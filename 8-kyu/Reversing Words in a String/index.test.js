const reverse = require('.')

test('Test 1', () => {
  expect(reverse('I am an expert at this')).toBe('this at expert an am I')
})

test('Test 2', () => {
  expect(reverse('This is so easy')).toBe('easy so is This')
})

test('Test 3', () => {
  expect(reverse('no one cares')).toBe('cares one no')
})

test('Test 4', () => {
  expect(reverse('')).toBe('')
})

test('Test 5', () => {
  expect(reverse('CodeWars')).toBe('CodeWars')
})
