/*
  Title:
    Grasshopper - Create the rooms

  Description:
    You are creating an escape the room game.
    The first step is create an object called rooms that contains all of the rooms of the game.
    The room object should have at least 3 rooms as properties, and each individial room should have at least three properties (example: name, description, completed).

  Kata Link:
    https://www.codewars.com/kata/grasshopper-create-the-rooms

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-create-the-rooms/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-create-the-rooms/solutions
*/

// Long Solution
const rooms = {
  firstRoom: {
    name: 'Saw I',
    description: 'Easy level',
    completed: true,
  },
  secondRoom: {
    name: 'Saw II',
    description: 'Medium level',
    completed: false,
  },
  thirdRoom: {
    name: 'Saw III',
    description: 'Hardcore level',
    completed: false,
  },
}

// Function Export
module.exports = rooms
