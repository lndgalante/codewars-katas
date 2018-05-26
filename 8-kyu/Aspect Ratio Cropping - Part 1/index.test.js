const aspectRatio = require('.')

test('Test 1', () => {
  expect(aspectRatio(640, 480)).toEqual([854, 480])
})

test('Test 2', () => {
  expect(aspectRatio(960, 720)).toEqual([1280, 720])
})

test('Test 3', () => {
  expect(aspectRatio(1440, 1080)).toEqual([1920, 1080])
})

test('Test 4', () => {
  expect(aspectRatio(1920, 1440)).toEqual([2560, 1440])
})
