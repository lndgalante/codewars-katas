const contamination = require('.')

test('Test 1', () => {
  expect(contamination('abc', 'z')).toBe('zzz')
})

test('Test 2', () => {
  expect(contamination('', 'z')).toBe('')
})

test('Test 3', () => {
  expect(contamination('abc', '')).toBe('')
})

test('Test 4', () => {
  expect(contamination('_3ebzgh4', '&')).toBe('&&&&&&&&')
})

test('Test 5', () => {
  expect(contamination('//case', ' ')).toBe('      ')
})
