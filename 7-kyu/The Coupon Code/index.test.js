const checkCoupon = require('./index.js')

test('Test 1', () => {
  expect(
    checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')
  ).toBeTruthy()
})

test('Test 2', () => {
  expect(
    checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')
  ).toBeFalsy()
})
