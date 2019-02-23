const switcher = require('.')

test('Test 1', () => {
  expect(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])).toBe('codewars')
})

test('Test 2', () => {
  expect(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])).toBe('btswmdsbd kkw')
})

test('Test 3', () => {
  expect(switcher(['4', '24'])).toBe('wc')
})
