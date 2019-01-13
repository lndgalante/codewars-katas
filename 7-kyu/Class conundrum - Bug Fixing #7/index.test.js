const List = require('.')

test('Test 1', () => {
  const myList = new List('string')
  expect(myList.add('Hello').count).toBe(1)
})

test('Test 2', () => {
  const myList = new List('string')
  expect(myList.add(5)).toBe(`This item is not of type: ${'string'}`)
})

test('Test 3', () => {
  const myList = new List('string')
  expect(myList.add(' ').add('World!').count).toBe(2)
})
