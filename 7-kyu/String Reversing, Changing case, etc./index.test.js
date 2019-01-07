const reverseAndMirror = require('.')

test('Test 1', () => {
  expect(reverseAndMirror('FizZ', 'buZZ')).toBe('zzUB@@@zZIffIZz')
})

test('Test 2', () => {
  expect(reverseAndMirror('String Reversing', 'Changing Case')).toBe('ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING')
})
