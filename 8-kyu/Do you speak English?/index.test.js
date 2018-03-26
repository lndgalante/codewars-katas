const spEng = require('./index.js')

test('Test 1', () => {
  expect(spEng('english')).toBeTruthy()
})

test('Test 2', () => {
  expect(spEng('egnlish')).toBeFalsy()
})
