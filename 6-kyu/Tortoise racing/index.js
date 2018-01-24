/*
  Title:
    Tortoise racing

  Description:
    Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour.
    Young B knows she runs faster than A, and furthermore has not finished her cabbage.

    When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour.
    How long will it take B to catch A?

    More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

    The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (don't worry for fractions of second).

    If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin.

  Examples:
    race(720, 850, 70) => [0, 32, 18]
    race(80, 91, 37)   => [3, 21, 49]

  Kata Link:
    https://www.codewars.com/kata/tortoise-racing

  Discuss Link:
    https://www.codewars.com/kata/tortoise-racing/discuss

  Solutions Link:
    https://www.codewars.com/kata/tortoise-racing/solutions
*/

// Long Solution
function race(v1, v2, g) {
  if (v1 >= v2) return null

  const time = g / (v2 - v1)

  const h = Math.trunc(time)
  const m = Math.trunc((time * 60) % 60)
  const s = Math.trunc((time * 3600) % 60)

  return [h, m, s]
}

// Function Export
module.exports = race
