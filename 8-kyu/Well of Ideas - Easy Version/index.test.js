const well = require('.')

test('Test 1', () => {
  expect(well(['bad', 'bad', 'bad'])).toBe('Fail!')
})

test('Test 2', () => {
  expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!')
})

test('Test 3', () => {
  expect(
    well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
  ).toBe('I smell a series!')
})
