const areaCode = require('.')

test('Test 1', () => {
  expect(areaCode("The supplier’s phone number is (555) 867-5309")).toBe('555')
})

test('Test 2', () => {
  expect(areaCode("Grae’s cell number used to be (123) 456-7890")).toBe('123')
})

test('Test 3', () => {
  expect(areaCode("The 102nd district court’s fax line is (124) 816-3264")).toBe('124')
})
