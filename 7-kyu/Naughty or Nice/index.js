/*
  Title:
    Naughty or Nice

  Description:
    Santa is coming to town and he needs your help finding out who's been naughty or nice.
    You will be given an entire year of JSON data following this format:

    {
        January: {
            '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
        },
        February: {
            '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
        },
        ...
        December: {
            '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
        }
    }

    Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater).
    If both are equal, return "Nice!"

  Kata Link:
    https://www.codewars.com/kata/5662b14e0a1fb8320a00005c

  Discuss Link:
    https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/discuss

  Solutions Link:
    https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/solutions
*/

// Long Solution
/* function naughtyOrNice(data) {
  const { nice, naughty } = Object.values(data).reduce(
    (accumulator, month) => {
      const { nice, naughty } = accumulator

      const totalNiceInMonth = Object.values(month).filter((type) => type === 'Nice').length
      const totalNaughtyInMonth = Object.values(month).filter((type) => type === 'Naughty').length

      return { nice: nice + totalNiceInMonth, naughty: naughty + totalNaughtyInMonth }
    },
    { naughty: 0, nice: 0 },
  )

  if (naughty > nice) return 'Naughty!'

  return 'Nice!'
}
*/

// Short Solution
const naughtyOrNice = (data) => {
  const stringData = JSON.stringify(data)
  return stringData.split('Naughty').length > stringData.split('Nice').length ? 'Naughty!' : 'Nice!'
}

// Function Export
module.exports = naughtyOrNice
