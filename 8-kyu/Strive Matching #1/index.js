/*
  Title:
    Strive Matching #1

  Description:
    Strive is a new developer-centric service that is focused on presenting software developers with jobs that excite us.
    Strive discovers these jobs for developers based on a number of factors.

    One of the simplest, yet most important factors is compensation.
    As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

    Let's give this a try. We'll create a function match which takes a candidate and a job,
    which will either return a boolean indicating whether the job is a valid match for the candidate.

    A candidate will have a minimum salary, so it will look like this:

    let candidate = {
      minSalary: 120000
    }
    A job will have a maximum salary, so it will look like this:

    let job = {
      maxSalary: 140000
    }
    If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

    For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary.
    However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.


  Kata Link:
    https://www.codewars.com/kata/strive-matching-number-1

  Discuss Link:
    https://www.codewars.com/kata/strive-matching-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/strive-matching-number-1/solutions
*/

// Long Solution
/*
const match = ({ minSalary }, { maxSalary }) => {
  if (!minSalary || !maxSalary) throw new Error('More data needed')

  const maxSalaryExtra = maxSalary + minSalary * 0.1
  return minSalary <= maxSalaryExtra
}
*/

// Short Solution
const match = ({ minSalary }, { maxSalary }) => {
  if (!minSalary || !maxSalary) throw new Error('More data needed')
  return maxSalary >= minSalary * 0.9
}

// Function Export
module.exports = match
