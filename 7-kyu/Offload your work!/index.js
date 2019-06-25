/*
  Title:
    Offload your work!

  Description:
    You are the best freelancer in the city.Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!
    To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.
    Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

    If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
    If we don't have to contribute any time to the project then return "Easy Money!"

  Kata Link:
    https://www.codewars.com/kata/offload-your-work

  Discuss Link:
    https://www.codewars.com/kata/offload-your-work/discuss

  Solutions Link:
    https://www.codewars.com/kata/offload-your-work/solutions
*/

// Long Solution
/*
function workNeeded(projectMinutes, freelancers) {
  const { hours, minutes } = freelancers.reduce(
    (total, [freelancerHours, freelancerMinutes]) => {
      total.hours += freelancerHours
      total.minutes += freelancerMinutes
      return total
    },
    { hours: 0, minutes: 0 }
  )

  const timeInMinutes = hours * 60 + minutes
  const timeLeftInMinutes = projectMinutes - timeInMinutes

  if (timeLeftInMinutes <= 0) return 'Easy Money!'

  const hoursToWork = timeLeftInMinutes / 60
  const roundHoursToWork = Math.floor(hoursToWork)

  const minutesToWork = (hoursToWork - roundHoursToWork) * 60
  const roundMinutesToWork = Math.round(minutesToWork)

  return `I need to work ${roundHoursToWork} hour(s) and ${roundMinutesToWork} minute(s)`
}
*/

// Short Solution
function workNeeded(projectMinutes, freelancers) {
  const freelancerMinutes = freelancers
    .map(([hours, minutes]) => hours * 60 + minutes)
    .reduce((total, minutes) => total + minutes, 0)

  const timeLeftInMinutes = projectMinutes - freelancerMinutes

  if (timeLeftInMinutes <= 0) return 'Easy Money!'

  const hoursToWork = Math.floor(timeLeftInMinutes / 60)
  const minutesToWork = timeLeftInMinutes % 60

  return `I need to work ${hoursToWork} hour(s) and ${minutesToWork} minute(s)`
}

// Function Export
module.exports = workNeeded
