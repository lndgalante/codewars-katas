const killcount = require('.')

test('Test 1', () => {
  const counselors = [['Mike', 7], ['Alysa', 3]]
  expect(killcount(counselors, 7)).toEqual(['Alysa'])
})
