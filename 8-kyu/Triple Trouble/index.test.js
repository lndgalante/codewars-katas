const tripleTrouble = require('.')

test('Test 1', () => {
  expect(tripleTrouble('this', 'test', 'lock')).toBe('ttlheoiscstk')
})

test('Test 2', () => {
  expect(tripleTrouble('aa', 'bb', 'cc')).toBe('abcabc')
})

test('Test 3', () => {
  expect(tripleTrouble('Bm', 'aa', 'tn')).toBe('Batman')
})

test('Test 4', () => {
  expect(tripleTrouble('LLh', 'euo', 'xtr')).toBe('LexLuthor')
})
