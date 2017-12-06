const likes = require('./index.js')

test('Test 1', () => {
  expect(likes([])).toBe('no one likes this')
})

test('Test 2', () => {
  expect(likes(['Peter'])).toBe('Peter likes this')
})

test('Test 3', () => {
  expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this')
})

test('Test 4', () => {
  expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this')
})

test('Test 5', () => {
  expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
    'Alex, Jacob and 2 others like this'
  )
})
