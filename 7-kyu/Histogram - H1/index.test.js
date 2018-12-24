const histogram = require('.')

test('Test 1', () => {
  const expected = `6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
`

  expect(histogram([7, 3, 10, 1, 0, 5])).toBe(expected)
})
