const owlPic = require('.')

test('Test 1', () => {
  expect(owlPic('kuawd6r8q27y87t93r76352475437')).toBe("UAW8Y8T’’0v0’’T8Y8WAU")
})

test('Test 2', () => {
  expect(owlPic('t6ggggggggWw')).toBe("TWW’’0v0’’WWT")
})
