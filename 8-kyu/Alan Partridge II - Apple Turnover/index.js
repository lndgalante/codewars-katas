/*
  Title:
    Alan Partridge II - Apple Turnover

  Description:
    As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

    Lynn: Alan, there’s that teacher chap.
    Alan: Michael, if he hits me, will you hit him first?
    Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
    Alan: Yeah, chicken stock.
    Phil: Hello Alan.
    Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
    Lynn: What do you mean?
    Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
    Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

    Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

    X will be either a number or a string. Both are valid.

  Kata Link:
    https://www.codewars.com/kata/alan-partridge-ii-apple-turnover

  Discuss Link:
    https://www.codewars.com/kata/alan-partridge-ii-apple-turnover/discuss

  Solutions Link:
    https://www.codewars.com/kata/alan-partridge-ii-apple-turnover/solutions
*/

// Long Solution
const apple = x =>
  x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : 'Help yourself to a honeycomb Yorkie for the glovebox.'

// Function Export
module.exports = apple
