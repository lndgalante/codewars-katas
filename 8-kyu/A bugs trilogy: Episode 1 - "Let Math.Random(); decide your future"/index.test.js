const yourFutureCareer = require('.')

test('Test 1', () => {
  expect(yourFutureCareer(0.3)).toBe('FrontEnd Developer')
})

test('Test 2', () => {
  expect(yourFutureCareer(0.5)).toBe('BackEnd Developer')
})

test('Test 3', () => {
  expect(yourFutureCareer(0.8)).toBe('Full-Stack Developer')
})
