/*
  Title:
    maxPossibleScore

  Description:
    You're a teacher preparing a test for your students.
    Each question is worth some number of points.
    Some of the questions are new to the students, while others are questions they have already seen and practiced. Your scoring system doubles the value of new questions. Your job is to determine the maximum possible score.

    Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions.
    The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

    You can assume that all questions are unique.

    Questions are case sensitive.

  Examples:
    maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10

  Kata Link:
    https://www.codewars.com/kata/maxpossiblescore

  Discuss Link:
    https://www.codewars.com/kata/maxpossiblescore/discuss

  Solutions Link:
    https://www.codewars.com/kata/maxpossiblescore/solutions
*/

// Long Solution
const maxPossibleScore = (object, array) => {
  const keysToInclude = new Set(array.map(String))
  const entries = Object.entries(object)

  return entries.reduce((acc, [key, value]) => acc + value * (keysToInclude.has(key) ? 2 : 1), 0)
}

// Function Export
module.exports = maxPossibleScore
