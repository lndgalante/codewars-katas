const stringClean = require('.')

test('Test 1', () => {
  expect(stringClean('')).toBe('')
})

test('Test 2', () => {
  expect(stringClean('! !')).toBe('! !')
})

test('Test 3', () => {
  expect(stringClean('(E3at m2e2!!)')).toBe('(Eat me!!)')
})

test('Test 4', () => {
  expect(stringClean('Dsa32 cdsc34232 csa!!! 1I 4Am cool!')).toBe(
    'Dsa cdsc csa!!! I Am cool!'
  )
})

test('Test 5', () => {
  expect(stringClean('A1 A1! AAA   3J4K5L@!!!')).toBe('A A! AAA   JKL@!!!')
})

test('Test 6', () => {
  expect(stringClean('Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@')).toBe(
    'Adgre Asad! AAA fvfdvJKL@'
  )
})

test('Test 7', () => {
  expect(
    stringClean('Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ')
  ).toBe('Addsadds A  $$sad! AAAe fKL@ ')
})

test('Test 8', () => {
  expect(
    stringClean('33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ')
  ).toBe('Addsadds A  $$sa!d! A!A!Ae$ f## ')
})

test('Test 9', () => {
  expect(
    stringClean(
      'My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?'
    )
  ).toBe('My "messy" data issues! Will they ever, ever be solved?')
})

test('Test 10', () => {
  expect(stringClean('Why can"t we buy the good software? #cheapskates')).toBe(
    'Why can"t we buy the good software? #cheapskates'
  )
})
