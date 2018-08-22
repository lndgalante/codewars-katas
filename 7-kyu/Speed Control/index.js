/*
  Title:
    Speed Control

  Description:
    In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit).
    For example, below is part of a record with s = 15:

    x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
    The sections are:

    0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
    We can calculate John's average hourly speed on every section and we get:

    [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
    Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x.
    If x length is less than or equal to 1 return 0 since the car didn't move.

    #Example: with the above data your function gps(x, s)should return 74

  Notes:
    With floats it can happen that results depends on the operations order.
    To calculate hourly speed you can use:

    (3600 * delta_distance) / s.

  Kata Link:
    https://www.codewars.com/kata/speed-control

  Discuss Link:
    https://www.codewars.com/kata/speed-control/discuss

  Solutions Link:
    https://www.codewars.com/kata/speed-control/solutions
*/

// Long Solution
const gps = (s, distances) =>
  distances.length <= 1
    ? 0
    : Math.floor(
        Math.max(
          ...distances.map((distance, index, array) => {
            const delta = index === 0 ? 0 : distance - array[index - 1]
            return (3600 * delta) / s
          })
        )
      )

// Function Export
module.exports = gps
