const feast = require('./index.js')

test('Test 1', () => {
  expect(feast('great blue heron', 'garlic naan')).toBeTruthy()
})

test('Test 2', () => {
  expect(feast('chickadee', 'chocolate cake')).toBeTruthy()
})

test('Test 3', () => {
  expect(feast('brown bear', 'bear claw')).toBeFalsy()
})
