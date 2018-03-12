/*
  Title:
    For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

  Description:
    This is a beginner friendly kata especially for UFC/MMA fans.

    It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

    If the winner is George Saint Pierre he will obviously say:

    "I am not impressed by your performance."
    If the winner is Conor McGregor he will most undoubtedly say:

    "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    Good Luck!

  Kata Link:
    https://www.codewars.com/kata/for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre

  Discuss Link:
    https://www.codewars.com/kata/for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre/discuss

  Solutions Link:
    https://www.codewars.com/kata/for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre/solutions
*/

// Long Solution
/*
const quote = fighter =>
  fighter.toLowerCase() === 'george saint pierre'
    ? 'I am not impressed by your performance.'
    : fighter.toLowerCase() === 'conor mcgregor'
      ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
      : Error('Unrecognized fighter')
*/

// Short Solution
const quote = fighter =>
  fighter.toLowerCase() === 'george saint pierre'
    ? 'I am not impressed by your performance.'
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!"

// Function Export
module.exports = quote
