const fixTheMeerkat = require('.')

test('Test 1', () => {
  expect(fixTheMeerkat(['tail', 'body', 'head'])).toEqual([
    'head',
    'body',
    'tail',
  ])
})

test('Test 2', () => {
  expect(fixTheMeerkat(['tails', 'body', 'heads'])).toEqual([
    'heads',
    'body',
    'tails',
  ])
})

test('Test 3', () => {
  expect(fixTheMeerkat(['bottom', 'middle', 'top'])).toEqual([
    'top',
    'middle',
    'bottom',
  ])
})

test('Test 4', () => {
  expect(fixTheMeerkat(['lower legs', 'torso', 'upper legs'])).toEqual([
    'upper legs',
    'torso',
    'lower legs',
  ])
})

test('Test 5', () => {
  expect(fixTheMeerkat(['ground', 'rainbow', 'sky'])).toEqual([
    'sky',
    'rainbow',
    'ground',
  ])
})
