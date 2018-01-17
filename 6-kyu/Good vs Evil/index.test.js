const goodVsEvil = require('./index.js')

test('Test 1', () => {
  expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toBe(
    'Battle Result: Evil eradicates all trace of Good'
  )
})

test('Test 2', () => {
  expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toBe(
    'Battle Result: Good triumphs over Evil'
  )
})

test('Test 3', () => {
  expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toBe(
    'Battle Result: No victor on this battle field'
  )
})
