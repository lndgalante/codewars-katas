/*
  Title:
    Do I get a bonus?

  Description:
    It's bonus time in the big city! The fatcats are rubbing their paws in anticipation...
    but who is going to make the most money?

    Build a function that takes in two arguments (salary, bonus).
    Salary will be an integer, and bonus a boolean.

    If bonus is true, the salary should be multiplied by 10.
    If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

    Return the total figure the individual will receive as a string prefixed
    with '£' (JS and Java) or '$' (C#, C++, Ruby, Clojure, Elixir, PHP and Python).

  Kata Link:
    https://www.codewars.com/kata/do-i-get-a-bonus

  Discuss Link:
    https://www.codewars.com/kata/do-i-get-a-bonus/discuss

  Solutions Link:
    https://www.codewars.com/kata/do-i-get-a-bonus/solutions
*/

// Long Solution
/*
function bonusTime(salary, bonus) {
  if (!bonus) return `£${salary}`

  return `£${salary * 10}`
}
*/

// Short Solution
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`

// Function Export
module.exports = bonusTime
