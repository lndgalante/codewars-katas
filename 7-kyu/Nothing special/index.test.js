const nothingSpecial = require('.')

test('Test 1', () => {
  expect(nothingSpecial('Hello World!')).toBe('Hello World')
})

test('Test 2', () => {
  expect(nothingSpecial('%^Take le$ft ##quad%r&a&nt')).toBe('Take left quadrant')
})

test('Test 3', () => {
  expect(nothingSpecial('M$$$$$$$y ally!!!!!')).toBe('My ally')
})

test('Test 4', () => {
  expect(nothingSpecial(25)).toBe('Not a string!')
})
