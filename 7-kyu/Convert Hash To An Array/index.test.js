const convertHashToArray = require('.')

test('Test 1', () => {
  expect(convertHashToArray({ name: 'Jeremy' })).toEqual([['name', 'Jeremy']])
})

test('Test 2', () => {
  expect(convertHashToArray({ name: 'Jeremy', age: 24 })).toEqual([['age', 24], ['name', 'Jeremy']])
})

test('Test 3', () => {
  expect(convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })).toEqual([
    ['age', 24],
    ['name', 'Jeremy'],
    ['role', 'Software Engineer'],
  ])
})

test('Test 4', () => {
  expect(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 })).toEqual([
    ['powerLevelOver', 9000],
    ['product', 'CodeWars'],
  ])
})

test('Test 5', () => {
  expect(convertHashToArray({})).toEqual([])
})
