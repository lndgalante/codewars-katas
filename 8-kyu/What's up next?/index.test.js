const nextItem = require('.')

test('Test 1', () => {
  expect(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)).toBe(6)
})

test('Test 2', () => {
  expect(nextItem(['a', 'b', 'c'], 'd')).toBeUndefined()
})

test('Test 3', () => {
  expect(nextItem(['a', 'b', 'c'], 'c')).toBeUndefined()
})

test('Test 4', () => {
  expect(nextItem('testing', 't')).toBe('e')
})

test('Test 5', () => {
  function* countFrom(n) {
    for (let i = n; ; ++i) yield i
  }

  expect(nextItem(countFrom(1), 12)).toBe(13)
})
