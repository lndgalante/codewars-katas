const solve = require('.')

test('Test 1', () => {
  expect(solve('Codewars@codewars123.com')).toEqual([1, 18, 3, 2])
})

test('Test 2', () => {
  expect(solve('bgA5<1d-tOwUZTS8yQ')).toEqual([7, 6, 3, 2])
})

test('Test 3', () => {
  expect(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H')).toEqual([9, 9, 6, 9])
})

test('Test 4', () => {
  expect(solve("RYT’>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")).toEqual([15, 8, 6, 9])
})

test('Test 5', () => {
  expect(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe')).toEqual([10, 7, 3, 6])
})

test('Test 6', () => {
  expect(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft')).toEqual([7, 13, 4, 10])
})
