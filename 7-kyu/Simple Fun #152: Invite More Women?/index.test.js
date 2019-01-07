const inviteMoreWomen = require('.')

test('Test 1', () => {
  expect(inviteMoreWomen([1, -1, 1])).toBeTrue()
})

test('Test 2', () => {
  expect(inviteMoreWomen([1, 1, 1])).toBeTrue()
})

test('Test 3', () => {
  expect(inviteMoreWomen([-1, -1, -1])).toBeFalse()
})

test('Test 4', () => {
  expect(inviteMoreWomen([1, -1])).toBeFalse()
})
