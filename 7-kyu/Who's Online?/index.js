/*
  Title:
    Who's Online?

  Description:
    You have a group chat application, but who is online!?

    You want to show your users which of their friends are online and available to chat!

    Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

    If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

    The input data has the following structure:
    [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]

    username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

    Finally, if you have no friends in your chat application, the input will be an empty array [].
    In this case you should return an empty object {} (empty Dictionary in C#).

  Kata Link:
    https://www.codewars.com/kata/whos-online

  Discuss Link:
    https://www.codewars.com/kata/whos-online/discuss

  Solutions Link:
    https://www.codewars.com/kata/whos-online/solutions
*/

// Long Solution
/*
const whosOnline = friends => {
  if (!friends.length) return {}

  const online = friends
    .filter(({ status, lastActivity }) => status === 'online' && lastActivity <= 10)
    .map(({ username }) => username)
  const away = friends
    .filter(({ status, lastActivity }) => status === 'online' && lastActivity > 10)
    .map(({ username }) => username)
  const offline = friends.filter(({ status }) => status === 'offline').map(({ username }) => username)

  return {
    ...(online.length && { online }),
    ...(offline.length && { offline }),
    ...(away.length && { away }),
  }
}
*/

// Short Solution
const whosOnline = friends =>
  friends.reduce((activities, { username, status, lastActivity }) => {
    const realStatus = status === 'online' && lastActivity > 10 ? 'away' : status
    return { ...activities, [realStatus]: activities[realStatus] ? [...activities.realStatus, username] : [username] }
  }, {})

// Function Export
module.exports = whosOnline
