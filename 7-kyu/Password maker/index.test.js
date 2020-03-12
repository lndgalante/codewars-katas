const makePassword = require('.')

test('Test 3', () => {
  expect(makePassword('Give me liberty or give me death')).toBe(
    'Gml0gmd',
    "Wrong output for ’Give me liberty or give me death’"
  )
})

test('Test 4', () => {
  expect(makePassword('Keep Calm and Carry On')).toBe('KCaC0', "Wrong output for ’Keep Calm and Carry On’")
})
