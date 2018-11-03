const zebulansNightmare = require('.')

test('Test 1', () => {
  expect(zebulansNightmare('camel_case')).toBe('camelCase')
})

test('Test 2', () => {
  expect(zebulansNightmare('mark_as_issue')).toBe('markAsIssue')
})

test('Test 3', () => {
  expect(zebulansNightmare('copy_paste_pep8')).toBe('copyPastePep8')
})

test('Test 4', () => {
  expect(zebulansNightmare('goto_next_kata')).toBe('gotoNextKata')
})

test('Test 5', () => {
  expect(zebulansNightmare('repeat')).toBe('repeat')
})

test('Test 6', () => {
  expect(zebulansNightmare('trolling_is_fun')).toBe('trollingIsFun')
})

test('Test 7', () => {
  expect(zebulansNightmare('why')).toBe('why')
})

test('Test 8', () => {
  expect(zebulansNightmare('123_abc_def')).toBe('123AbcDef')
})
