const comesAfter = require('.')

test('Test 1', () => {
  expect(comesAfter('Pirates say arrrrrrrrr.', 'r')).toBe('arrrrrrrr')
})

test('Test 2', () => {
  expect(comesAfter('Free coffee for all office workers!', 'F')).toBe('rfeofi')
})

test('Test 3', () => {
  expect(comesAfter('king kUnta is the sickest rap song ever kNown k!', 'k')).toBe('iUeN')
})

test('Test 4', () => {
  expect(comesAfter('p8tice makes pottery p0rfect!', 'p')).toBe('o')
})

test('Test 5', () => {
  expect(comesAfter('d8u d._ rly 2d1s', 'D')).toBe('')
})
