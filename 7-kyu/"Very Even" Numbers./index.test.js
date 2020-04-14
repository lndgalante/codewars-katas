const isVeryEvenNumber = require('.')

test('Test 1', () => {
  const inputs = [0, 4, 12, 222, 5, 45, 4554, 1234, 88, 24, 400000220]
  const expecteds = [true, true, false, true, false, false, false, false, false, true, true]

  for (const [input, expected] of inputs.map((input, i) => [input, expecteds[i]])) {
    console.log(`Testing for n = ${input}`)
    expect(isVeryEvenNumber(input)).toBe(expected)
  }
})
