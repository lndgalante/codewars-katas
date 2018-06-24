const match = require('.')

test('Test 1', () => {
  const candidate1 = { minSalary: 120000 }
  const job1 = { maxSalary: 130000 }

  expect(match(candidate1, job1)).toBeTrue()
})

test('Test 2', () => {
  const candidate1 = { minSalary: 120000 }
  const job2 = { maxSalary: 80000 }

  expect(match(candidate1, job2)).toBeFalse()
})
