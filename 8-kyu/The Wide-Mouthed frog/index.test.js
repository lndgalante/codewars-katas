const mouthSize = require('./index.js')

test('Test 1', () => {
  expect(mouthSize('toucan')).toBe('wide')
})

test('Test 2', () => {
  expect(mouthSize('ant bear')).toBe('wide')
})

test('Test 3', () => {
  expect(mouthSize('alligator')).toBe('small')
})
