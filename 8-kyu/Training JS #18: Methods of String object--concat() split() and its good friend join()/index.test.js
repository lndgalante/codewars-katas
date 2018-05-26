const splitAndMerge = require('.')

test('Test 1', () => {
  expect(splitAndMerge('My name is John', ' ')).toBe('M y n a m e i s J o h n')
})

test('Test 2', () => {
  expect(splitAndMerge('My name is John', '-')).toBe('M-y n-a-m-e i-s J-o-h-n')
})

test('Test 3', () => {
  expect(splitAndMerge('Hello World!', '.')).toBe('H.e.l.l.o W.o.r.l.d.!')
})

test('Test 4', () => {
  expect(splitAndMerge('Hello World!', ',')).toBe('H,e,l,l,o W,o,r,l,d,!')
})
