const makeBackronym = require('.')

test('Test 1', () => {
  expect(makeBackronym('dgm')).toBe('disturbing gregarious mustache')
})

test('Test 2', () => {
  expect(makeBackronym('lkj')).toBe('literal klingon joke')
})

test('Test 3', () => {
  expect(makeBackronym('interesting')).toBe(
    'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'
  )
})

test('Test 4', () => {
  expect(makeBackronym('codewars')).toBe(
    'confident oscillating disturbing eager weird awesome rant stylish'
  )
})
