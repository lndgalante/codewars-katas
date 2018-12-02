const sc = require('.')

test('Test 1', () => {
  const apple = [
    ['B', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
  ]

  expect(sc(apple)).toEqual([0, 0])
})

test('Test 2', () => {
  const apple = [
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'B', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
  ]

  expect(sc(apple)).toEqual([1, 1])
})

test('Test 3', () => {
  const apple = [
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'B', 'A', 'A', 'A'],
  ]

  expect(sc(apple)).toEqual([4, 1])
})
