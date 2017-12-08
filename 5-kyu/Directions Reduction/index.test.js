const dirReduc = require('./index.js')

test('Test 1', () => {
  expect(
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
  ).toEqual(['NORTH', 'SOUTH', 'WEST'])
})

test('Test 2', () => {
  expect(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])).toEqual([
    'NORTH',
    'WEST',
    'SOUTH',
    'EAST',
  ])
})

test('Test 3', () => {
  expect(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])).toEqual([
    'NORTH',
    'SOUTH',
  ])
})
