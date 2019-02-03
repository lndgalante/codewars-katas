const createSSP = require('.')

test('Test 1', () => {
  expect(createSSP('haxorpassword')).toBe('5@*0rp@$$w0rd')
})
