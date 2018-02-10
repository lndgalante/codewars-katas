/*
  Title:
    Grader

  Description:
    Create a function that takes a number as an argument and returns a grade based on that number.

    Score	                                      Grade
    Anything greater than 1 or less than 0.6	  "F"
    0.9 or greater	                            "A"
    0.8 or greater	                            "B"
    0.7 or greater	                            "C"
    0.6 or greater	                            "D"

  Examples:
    grader(0.9) == 'A'
    grader(0.3) == 'F'
    grader(234) == 'F'
    grader(0.75) == 'C'

  Kata Link:
    https://www.codewars.com/kata/grader

  Discuss Link:
    https://www.codewars.com/kata/grader/discuss

  Solutions Link:
    https://www.codewars.com/kata/grader/solutions
*/

// Long Solution
function grader(score) {
  if (score > 1 || score < 0.6) return 'F'
  if (score >= 0.9) return 'A'
  if (score >= 0.8) return 'B'
  if (score >= 0.7) return 'C'
  if (score >= 0.6) return 'D'
}

// Function Export
module.exports = grader
