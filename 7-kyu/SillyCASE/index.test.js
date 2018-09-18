const sillycase = require('.')

test('Test 1', () => {
  expect(sillycase('foobar')).toBe('fooBAR')
})

test('Test 2', () => {
  expect(sillycase('brian')).toBe('briAN')
})

test('Test 3', () => {
  expect(sillycase('jAvASCript')).toBe('javasCRIPT')
})
