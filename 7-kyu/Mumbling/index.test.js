const accum = require('.')

test('Test 1', () => {
  expect(accum('abcd')).toBe('A-Bb-Ccc-Dddd')
})

test('Test 2', () => {
  expect(accum('RqaEzty')).toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy')
})
