const feast = require('.')

test('Test 1', () => {
  expect(feast('great blue heron', 'garlic naan')).toBeTrue()
})

test('Test 2', () => {
  expect(feast('chickadee', 'chocolate cake')).toBeTrue()
})

test('Test 3', () => {
  expect(feast('brown bear', 'bear claw')).toBeFalse()
})
