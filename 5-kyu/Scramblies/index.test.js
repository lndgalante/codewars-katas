const scramble = require('.')

test('Test 1', () => {
  expect(scramble('rkqodlw', 'world')).toBeTrue()
})

test('Test 2', () => {
  expect(scramble('cedewaraaossoqqyt', 'codewars')).toBeTrue()
})

test('Test 3', () => {
  expect(scramble('katas', 'steak')).toBeFalse()
})

test('Test 4', () => {
  expect(scramble('scriptjava', 'javascript')).toBeTrue()
})

test('Test 5', () => {
  expect(scramble('jscripts', 'javascript')).toBeFalse()
})

test('Test 6', () => {
  expect(scramble('aabbcamaomsccdd', 'commas')).toBeTrue()
})
