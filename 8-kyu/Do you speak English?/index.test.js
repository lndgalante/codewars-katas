const spEng = require('.')

test('Test 1', () => {
  expect(spEng('english')).toBeTrue()
})

test('Test 2', () => {
  expect(spEng('egnlish')).toBeFalse()
})
