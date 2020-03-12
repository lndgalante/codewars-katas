const vaporcode = require('.')

test('Test 1', () => {
  expect(vaporcode("Let’s go to the movies")).toBe("L  E  T  ’  S  G  O  T  O  T  H  E  M  O  V  I  E  S")
})

test('Test 2', () => {
  expect(vaporcode("Why isn’t my code working?")).toBe(
    "W  H  Y  I  S  N  ’  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
  )
})
