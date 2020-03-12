/*
  Title:
    SCHEDULE YOUR DA(RRA)Y

  Description:
    The best way to have a productive day is to plan out your work schedule. Given the following three inputs, please create an an array of time alloted to work, broken up with time alloted with breaks:

    Input 1: Hours - Number of hours available to you to get your work done!
    Input 2: Tasks - How many tasks you have to do througout the day
    Input 3: Duration (minutes)- How long each of your tasks will take to complete

    Criteria to bear in mind:

        Your schedule should start with work and end with work.
        It should also be in minutes, rounded to the nearest whole minute.
        If your work is going to take more time than you have, return "You're not sleeping tonight!"

  Examples:
    dayPlan(8, 5, 30) == [ 30, 83, 30, 83, 30, 83, 30, 83, 30 ]
    dayPlan(3, 5, 60) == "You're not sleeping tonight!"

  Kata Link:
    https://www.codewars.com/kata/schedule-your-da-rra-y

  Discuss Link:
    https://www.codewars.com/kata/schedule-your-da-rra-y/discuss

  Solutions Link:
    https://www.codewars.com/kata/schedule-your-da-rra-y/solutions
*/

// Long Solution
const dayPlan = (hours, tasks, duration) => {
  const hoursToMinutes = hours * 60
  const timeOnTask = tasks * duration
  const breaks = tasks - 1
  const totalBreak = hoursToMinutes - timeOnTask
  const breakTime = Math.round(totalBreak / breaks)

  if (hoursToMinutes < timeOnTask) return "You’re not sleeping tonight!"
  return Array.from({ length: tasks + breaks }, (_, index) => (index % 2 === 0 ? duration : breakTime))
}

// Function Export
module.exports = dayPlan
