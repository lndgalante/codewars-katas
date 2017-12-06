const reverseWords = require('./index')

test('Test 1', () => {
  expect(reverseWords('hello world!')).toBe('world! hello')
})

test('Test 2', () => {
  expect(reverseWords("yoda doesn't speak like this")).toBe(
    "this like speak doesn't yoda"
  )
})

test('Test 3', () => {
  expect(reverseWords('foobar')).toBe('foobar')
})

test('Test 4', () => {
  expect(reverseWords('foobar')).toBe('foobar')
})

test('Test 4', () => {
  expect(reverseWords('kata editor')).toBe('editor kata')
})

test('Test 5', () => {
  expect(reverseWords('row row row your boat')).toBe('boat your row row row')
})
