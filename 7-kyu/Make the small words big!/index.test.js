const smallWordHelper = require('.')

test('Test 1', () => {
  expect(smallWordHelper('The quick brown fox jumps over the lazy dog')).toBe('THE qck brwn FOX jmps vr THE lzy DOG')
})

test('Test 2', () => {
  expect(smallWordHelper("I’m just a small word from a small word family")).toBe(
    "I’M jst A smll wrd frm A smll wrd fmly",
  )
})
