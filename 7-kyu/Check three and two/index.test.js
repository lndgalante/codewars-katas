const checkThreeAndTwo = require('.')

test('Test 1', () => {
  expect(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b'])).toBeTrue()
})

test('Test 2', () => {
  expect(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b'])).toBeFalse()
})

test('Test 3', () => {
  expect(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a'])).toBeFalse()
})
