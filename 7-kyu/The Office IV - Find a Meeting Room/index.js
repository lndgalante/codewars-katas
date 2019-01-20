/*
  Title:
    The Office IV - Find a Meeting Room

  Description:
    Your job at E-Corp is both boring and difficult.
    It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

    In this kata, you will be given an array. Each value represents a meeting room.
    Your job? Find the first empty one and return it's index (N.B. There may be more than one empty room in some test cases).

    'X' --> busy
    'O' --> empty

    If all rooms are busy, return 'None available!'.

  Kata Link:
    https://www.codewars.com/kata/the-office-iv-find-a-meeting-room

  Discuss Link:
    https://www.codewars.com/kata/the-office-iv-find-a-meeting-room/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-office-iv-find-a-meeting-room/solutions
*/

// Long Solution
/*
const meeting = x => (x.every(status => status === 'X') ? 'None available!' : x.findIndex(status => status === 'O'))
*/

// Short Solution
const meeting = x => {
  const emptyRoomIndex = x.indexOf('O')
  return emptyRoomIndex === -1 ? 'None available!' : emptyRoomIndex
}

// Function Export
module.exports = meeting
