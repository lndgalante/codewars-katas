const removeRotten = require('.')

test('Test 1', () => {
  expect(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange'])).toEqual(
    ['apple', 'banana', 'kiwi', 'melone', 'orange']
  )
})

test('Test 2', () => {
  expect(removeRotten([])).toEqual([])
})

test('Test 3', () => {
  expect(
    removeRotten(['apple', 'rottenBanana', 'kiwi', 'melone', 'orange'])
  ).toEqual(['apple', 'banana', 'kiwi', 'melone', 'orange'])
})

test('Test 4', () => {
  expect(removeRotten('bananas')).toEqual([])
})
