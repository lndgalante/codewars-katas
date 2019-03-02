/*
  Title:
    Next birth-day of the week finder

  Description:
    Can you find after how many years will a person's birthday fall on the same day of the week that he was born?

  Examples:
    For example, Joy's birthday is on 16th October, 1990 which falls on Friday. After how many years will his birthday fall on Friday again? (That would be 11 years)

    nextBirthdayOfTheWeek(new Date(1990, 10, 16)) //11
    nextBirthdayOfTheWeek(new Date(2012, 5, 20))  //6
    nextBirthdayOfTheWeek(new Date(1975, 2, 22))  //5

  Kata Link:
    https://www.codewars.com/kata/next-birth-day-of-the-week-finder

  Discuss Link:
    https://www.codewars.com/kata/next-birth-day-of-the-week-finder/discuss

  Solutions Link:
    https://www.codewars.com/kata/next-birth-day-of-the-week-finder/solutions
*/

// Long Solution
const nextBirthdayOfTheWeek = birthday => {
  let year = birthday.getFullYear() + 1
  const [month, weekday, day] = [birthday.getMonth(), birthday.getDay(), birthday.getDate()]

  while (new Date(year, month, day).getDay() !== weekday) year++

  return year - birthday.getFullYear()
}

// Function Export
module.exports = nextBirthdayOfTheWeek
