/*
  Title:
    Human Readable Time

  Description:
    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

  Kata Link:
    https://www.codewars.com/kata/human-readable-time

  Discuss Link:
    https://www.codewars.com/kata/human-readable-time/discuss

  Solutions Link:
    https://www.codewars.com/kata/human-readable-time/solutions
*/

// Long Solution
function humanReadable(seconds) {
  const minutes = seconds / 60
  const realSeconds = Math.floor(seconds % 60)
  const realMinutes = Math.floor(minutes % 60)
  const realHour = Math.floor(minutes / 60)

  const readableHour =
    String(realHour).length === 1 ? String(realHour).padStart(2, '0') : realHour

  const readableMinutes =
    String(realMinutes).length === 1
      ? String(realMinutes).padStart(2, '0')
      : realMinutes

  const readableSeconds =
    String(realSeconds).length === 1
      ? String(realSeconds).padStart(2, '0')
      : realSeconds

  return `${readableHour}:${readableMinutes}:${readableSeconds}`
}

// Function Export
module.exports = humanReadable
