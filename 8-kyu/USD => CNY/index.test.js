const usdcny = require('.')

test('Test 1', () => {
  expect(usdcny(15)).toBe('101.25 Chinese Yuan')
})

test('Test 2', () => {
  expect(usdcny(465)).toBe('3138.75 Chinese Yuan')
})
