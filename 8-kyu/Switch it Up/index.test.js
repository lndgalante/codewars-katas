const switchItUp = require('./index.js')

test('Test 1', () => {
  expect(switchItUp(1)).toBe('One')
})

test('Test 2', () => {
  expect(switchItUp(3)).toBe('Three')
})

test('Test 3', () => {
  expect(switchItUp(5)).toBe('Five')
})
