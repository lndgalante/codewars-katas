/*
  Title:
    Unlucky Days

  Description:
    Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
    Find the number of Friday 13th in the given year.

    Input: Year as an integer.
    Output: Number of Black Fridays in the year as an integer.
    Precondition: 1000 < |year| < 3000

  Examples:
    unluckyDays(2015) == 3
    unluckyDays(1986) == 1

  Notes:
    For Ruby consider using the Gregorian Calendar instead of the default one (Italian), to have results coherent with other languages.

  Kata Link:
    https://www.codewars.com/kata/unlucky-days

  Discuss Link:
    https://www.codewars.com/kata/unlucky-days/discuss

  Solutions Link:
    https://www.codewars.com/kata/unlucky-days/solutions
*/

// Long Solution
/*
const unluckyDays = year => {
  const names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const fridays13 = months.map(month => {
    const date = new Date(year, month - 1, 1)
    let count = 0

    while (date.getMonth() === month - 1) {
      const day = `${date.getDate()}-${names[date.getDay()]}`
      if (day === '13-fri') count++
      date.setDate(date.getDate() + 1)
    }

    return count
  })

  return fridays13.reduce((total, friday) => total + friday, 0)
}
*/

// Short Solution
const unluckyDays = year => Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length

// Function Export
module.exports = unluckyDays
