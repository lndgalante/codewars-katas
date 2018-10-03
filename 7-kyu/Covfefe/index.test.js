const covfefe = require('.')

test('Test 1', () => {
  expect(covfefe('coverage')).toBe('covfefe')
})

test('Test 2', () => {
  expect(covfefe('coverage coverage')).toBe('covfefe covfefe')
})

test('Test 3', () => {
  expect(covfefe('nothing')).toBe('nothing covfefe')
})

test('Test 4', () => {
  expect(covfefe('double space ')).toBe('double space  covfefe')
})

test('Test 5', () => {
  expect(covfefe('covfefe')).toBe('covfefe covfefe')
})
