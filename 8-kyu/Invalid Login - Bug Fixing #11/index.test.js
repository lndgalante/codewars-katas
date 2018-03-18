const validate = require('./index.js')

test('Test 1', () => {
  expect(validate('Timmy', 'password"||""=="')).toBe(
    'Wrong username or password!'
  )
})

test('Test 2', () => {
  expect(validate('Admin', 'gs5bw"||1==1//')).toBe(
    'Wrong username or password!'
  )
})
