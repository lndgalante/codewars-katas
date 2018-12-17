const capitalize = require('.')

test('Test 1', () => {
  expect(capitalize('abcdef')).toEqual(['AbCdEf', 'aBcDeF'])
})

test('Test 2', () => {
  expect(capitalize('codewars')).toEqual(['CoDeWaRs', 'cOdEwArS'])
})

test('Test 3', () => {
  expect(capitalize('abracadabra')).toEqual(['AbRaCaDaBrA', 'aBrAcAdAbRa'])
})

test('Test 4', () => {
  expect(capitalize('codewarriors')).toEqual(['CoDeWaRrIoRs', 'cOdEwArRiOrS'])
})
