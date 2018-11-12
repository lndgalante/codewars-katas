const initials = require('.')

test('Test 1', () => {
  expect(initials('code wars')).toBe('C.Wars')
})

test('Test 2', () => {
  expect(initials('Barack hussain obama')).toBe('B.H.Obama')
})

test('Test 3', () => {
  expect(initials('barack hussain Obama')).toBe('B.H.Obama')
})
