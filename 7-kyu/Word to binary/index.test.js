const wordToBin = require('.')

test('Test 2', () => {
  expect(wordToBin('man')).toEqual(['01101101', '01100001', '01101110'])
})

test('Test 3', () => {
  expect(wordToBin('AB')).toEqual(['01000001', '01000010'])
})

test('Test 4', () => {
  expect(wordToBin('wecking')).toEqual([
    '01110111',
    '01100101',
    '01100011',
    '01101011',
    '01101001',
    '01101110',
    '01100111',
  ])
})

test('Test 5', () => {
  expect(wordToBin('Ruby')).toEqual(['01010010', '01110101', '01100010', '01111001'])
})

test('Test 6', () => {
  expect(wordToBin('Yosemite')).toEqual([
    '01011001',
    '01101111',
    '01110011',
    '01100101',
    '01101101',
    '01101001',
    '01110100',
    '01100101',
  ])
})
