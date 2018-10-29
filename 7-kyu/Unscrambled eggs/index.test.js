const unscrambleEggs = require('.')

test('Test 1', () => {
  expect(unscrambleEggs('ceggodegge heggeregge')).toBe('code here')
})

test('Test 2', () => {
  expect(unscrambleEggs('FeggUNegg KeggATeggA')).toBe('FUN KATA')
})
