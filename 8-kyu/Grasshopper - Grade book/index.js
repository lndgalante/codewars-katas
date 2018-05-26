/*
  Title:
    Grasshopper - Grade book

  Description:
    Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

    Numerical Score	     Letter Grade
    90 <= score <= 100	 'A'
    80 <= score < 90	   'B'
    70 <= score < 80	   'C'
    60 <= score < 70	   'D'
    0 <=  score < 60	   'F'

    Tested values are all between 0 and 100.
    Theres is no need to check for negative values or values greater than 100.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-grade-book

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-grade-book/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-grade-book/solutions
*/

// Long Solution
function getGrade(...grades) {
  const score =
    grades.reduce((total, grade) => total + grade, 0) / grades.length

  if (score <= 100 && score >= 90) return 'A'
  if (score < 90 && score >= 80) return 'B'
  if (score < 80 && score >= 70) return 'C'
  if (score < 70 && score >= 60) return 'D'
  return 'F'
}

// Function Export
module.exports = getGrade
