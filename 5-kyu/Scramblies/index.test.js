const scramble = require('.')

test('Test 1', () => {
  expect(scramble('rkqodlw', 'world')).toBeTruthy()
})

test('Test 2', () => {
  expect(scramble('cedewaraaossoqqyt', 'codewars')).toBeTruthy()
})

test('Test 3', () => {
  expect(scramble('katas', 'steak')).toBeFalsy()
})

test('Test 4', () => {
  expect(scramble('scriptjava', 'javascript')).toBeTruthy()
})

test('Test 5', () => {
  expect(scramble('jscripts', 'javascript')).toBeFalsy()
})

test('Test 6', () => {
  expect(scramble('aabbcamaomsccdd', 'commas')).toBeTruthy()
})
