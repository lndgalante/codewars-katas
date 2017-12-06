const XO = require('./index.js')

test('Test 1', () => {
  expect(XO('xo')).toBeTruthy()
})

test('Test 2', () => {
  expect(XO('xxOo')).toBeTruthy()
})

test('Test 3', () => {
  expect(XO('xxxm')).toBeFalsy()
})

test('Test 4', () => {
  expect(XO('Oo')).toBeFalsy()
})
