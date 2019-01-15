/*
  Title:
    The Pony Express

  Description:
    A History Lesson
    The Pony Express was a mail service operating in the US in 1859-60.

    It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.
    How it worked
    There were a number of stations, where:

    The rider switched to a fresh horse and carried on, or
    The mail bag was handed over to the next rider

    Kata Task
    stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
    Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

  Notes:
    Each rider travels as far as he can, but never more than 100 miles.

  Kata Link:
    https://www.codewars.com/kata/the-pony-express

  Discuss Link:
    https://www.codewars.com/kata/the-pony-express/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-pony-express/solutions
*/

// Long Solution
/*
const riders = stations => {
  let totalRiders = 1
  let totalDistance = 0

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i]
    totalDistance += station

    if (totalDistance > 100) {
      totalDistance = station
      totalRiders++
    }
  }

  return totalRiders
}
*/

// Short Solution
const riders = stations =>
  stations.reduce(
    (data, station) => {
      data.totalDistance += station

      if (data.totalDistance > 100) {
        data.totalDistance = station
        data.totalRiders++
      }

      return data
    },
    { totalRiders: 1, totalDistance: 0 }
  ).totalRiders

// Function Export
module.exports = riders
