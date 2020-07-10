/*
  Title:
    Day of The Week

  Description:
    Oh no! I need to find out what day it is on a few particular dates. Help me figure it out.
    Return "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
    Dates may be passed in as strings (formatted as MM/DD/YYYY) or as Date objects.

  Kata Link:
    https://www.codewars.com/kata/588d54c2ce8a3532a500001b

  Discuss Link:
    https://www.codewars.com/kata/588d54c2ce8a3532a500001b/discuss

  Solutions Link:
    https://www.codewars.com/kata/588d54c2ce8a3532a500001b/solutions
*/

// Long Solution
/*
const getDayOfTheWeek = (date) => {
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  if (typeof date === 'object') return DAYS[date.getDay()]
  if (typeof date === 'string') return DAYS[new Date(date).getDay()]
}
*/

// Short Solution
const getDayOfTheWeek = (date) => {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(date).getDay()]
}

// Function Export
module.exports = getDayOfTheWeek
