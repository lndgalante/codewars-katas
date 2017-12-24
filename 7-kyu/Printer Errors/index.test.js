const printerError = require('./index')

test('Test 1', () => {
  expect(
    printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
  ).toBe('3/56')
})

test('Test 2', () => {
  expect(printerError('aaabbbbhaijjjm')).toBe('0/14')
})

test('Test 3', () => {
  expect(printerError('aaaxbbbbyyhwawiwjjjwwm')).toBe('8/22')
})
