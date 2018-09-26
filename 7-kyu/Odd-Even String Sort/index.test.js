const sortMyString = require('.')

test('Test 1', () => {
  expect(sortMyString('CodeWars')).toBe('CdWr oeas')
})

test('Test 2', () => {
  expect(sortMyString("YCOLUE'VREER")).toBe("YOU'RE CLEVER")
})
