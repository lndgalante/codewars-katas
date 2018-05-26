const generateLink = require('.')

test('Test 1', () => {
  expect(generateLink('matt c')).toBe('http://www.codewars.com/users/matt%20c')
})

test('Test 2', () => {
  expect(generateLink('g964')).toBe('http://www.codewars.com/users/g964')
})

test('Test 3', () => {
  expect(generateLink('GiacomoSorbi')).toBe(
    'http://www.codewars.com/users/GiacomoSorbi'
  )
})

test('Test 4', () => {
  expect(generateLink('ZozoFouchtra')).toBe(
    'http://www.codewars.com/users/ZozoFouchtra'
  )
})

test('Test 5', () => {
  expect(generateLink('colbydauph')).toBe(
    'http://www.codewars.com/users/colbydauph'
  )
})
