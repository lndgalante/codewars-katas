const longestConsec = require('./index.js')

test('Test 1', () => {
  expect(
    longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
  ).toBe('abigailtheta')
})

test('Test 2', () => {
  expect(
    longestConsec(
      [
        'ejjjjmmtthh',
        'zxxuueeg',
        'aanlljrrrxx',
        'dqqqaaabbb',
        'oocccffuucccjjjkkkjyyyeehh',
      ],
      1
    )
  ).toBe('oocccffuucccjjjkkkjyyyeehh')
})

test('Test 3', () => {
  expect(longestConsec([], 3)).toBe('')
})

test('Test 4', () => {
  expect(
    longestConsec(
      [
        'itvayloxrp',
        'wkppqsztdkmvcuwvereiupccauycnjutlv',
        'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
      ],
      2
    )
  ).toBe('wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck')
})

test('Test 5', () => {
  expect(
    longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2)
  ).toBe('wlwsasphmxxowiaxujylentrklctozmymu')
})

test('Test 6', () => {
  expect(
    longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)
  ).toBe('')
})

test('Test 7', () => {
  expect(
    longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)
  ).toBe('ixoyx3452zzzzzzzzzzzz')
})

test('Test 8', () => {
  expect(
    longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)
  ).toBe('')
})

test('Test 9', () => {
  expect(
    longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)
  ).toBe('')
})
