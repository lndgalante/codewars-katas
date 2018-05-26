const cookie = require('.')

test('Test 1', () => {
  expect(cookie('Ryan')).toBe('Who ate the last cookie? It was Zach!')
})

test('Test 2', () => {
  expect(cookie(26)).toBe('Who ate the last cookie? It was Monica!')
})

test('Test 3', () => {
  expect(cookie(2.3)).toBe('Who ate the last cookie? It was Monica!')
})

test('Test 4', () => {
  expect(cookie(true)).toBe('Who ate the last cookie? It was the dog!')
})
