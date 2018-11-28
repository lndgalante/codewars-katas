/*
  Title:
    Correct the time-string

  Description:
    A new task for you!

    You have to create a method, that corrects a given time string. There was a problem in addition, so many of the time strings are broken. Time-Format is european. So from "00:00:00" to "23:59:59".

    Some examples:

    "09:10:01" -> "09:10:01"
    "11:70:10" -> "12:10:10"
    "19:99:99" -> "20:40:39"
    "24:01:01" -> "00:01:01"

    If the input-string is null or empty return exactly this value! (empty string for C++)
    If the time-string-format is invalid, return null. (empty string for C++)

  Kata Link:
    https://www.codewars.com/kata/correct-the-time-string

  Discuss Link:
    https://www.codewars.com/kata/correct-the-time-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/correct-the-time-string/solutions
*/

// Long Solution
/*
const fixLeadingZero = number => (String(number).length === 1 ? String(number).padStart(2, '0') : number)

const timeCorrect = timestring => {
  if (!timestring) return timestring
  if (timestring.split(':').length !== 3) return null
  if (!/(\d{2}):(\d{2}):(\d{2})/g.test(timestring)) return null

  const [hour, minutes, seconds] = timestring.split(':').map(Number)

  const secondsOverflow = seconds / 60
  const fixedSeconds = parseInt(seconds % 60)

  const minutesOverflow = (minutes + secondsOverflow) / 60
  const fixedMinutes = parseInt((minutes + secondsOverflow) % 60)

  const fixedHour = parseInt((hour + minutesOverflow) % 24)

  return `${fixLeadingZero(fixedHour)}:${fixLeadingZero(fixedMinutes)}:${fixLeadingZero(fixedSeconds)}`
}
*/

// Short Solution
const timeCorrect = timestring => {
  if (!timestring) return timestring
  if (!/(\d{2}):(\d{2}):(\d{2})/g.test(timestring)) return null

  const date = new Date()
  const time = timestring.split(':').map(Number)

  date.setUTCHours(...time)
  return date.toLocaleTimeString('en', { hour12: false })
}

// Function Export
module.exports = timeCorrect
