const repeater = require('.')

test('Test 1', () => {
  expect(repeater('yo', 3)).toBe('"yo" repeated 3 times is: "yoyoyo"')
})

test('Test 2', () => {
  expect(repeater('WuB', 6)).toBe('"WuB" repeated 6 times is: "WuBWuBWuBWuBWuBWuB"')
})

test('Test 3', () => {
  expect(repeater('code, eat, code, sleep... ', 2)).toBe(
    '"code, eat, code, sleep... " repeated 2 times is: "code, eat, code, sleep... code, eat, code, sleep... "'
  )
})
