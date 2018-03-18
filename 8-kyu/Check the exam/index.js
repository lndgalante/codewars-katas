/*
  Title:
    Check the exam

  Description:
    The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"].
    The second one is "answers" array and contains student's answers.

    The two arrays are not empty and are the same length. Return the score for this array of answers,
    giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

    If the score < 0, return 0.

  Examples:
    checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
    checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
    checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
    checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

  Kata Link:
    https://www.codewars.com/kata/check-the-exam

  Discuss Link:
    https://www.codewars.com/kata/check-the-exam/discuss

  Solutions Link:
    https://www.codewars.com/kata/check-the-exam/solutions
*/

// Long Solution
const checkExam = (answers, responses) => {
  const score = responses.reduce((total, response, index) => {
    if (!response) return total
    if (response === answers[index]) return total + 4
    if (response !== answers[index]) return total - 1

    return total
  }, 0)

  return score > 0 ? score : 0
}

// Function Export
module.exports = checkExam
