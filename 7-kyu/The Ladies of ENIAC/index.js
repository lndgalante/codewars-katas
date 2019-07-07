/*
  Title:
    The Ladies of ENIAC

  Description:
    Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first “computors” working at the University of Pennsylvania’s Moore School of Engineering (1945).
    Through their contributions, we gained the first software application and the first programming classes!
    The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!

    Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

    To keep: only alpha characters, space characters and exclamation marks. To remove: numbers and these characters: %$&/£?@

    Result should be all in uppercase.

  Kata Link:
    https://www.codewars.com/kata/the-ladies-of-eniac

  Discuss Link:
    https://www.codewars.com/kata/the-ladies-of-eniac/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-ladies-of-eniac/solutions
*/

// Long Solution
/*
const radLadies = name => name.replace(/[%$&/£?@\d]/g, '').toUpperCase()
*/

// Short Solution
const radLadies = name => name.replace(/[^a-z\s!]/gi, '').toUpperCase()

// Function Export
module.exports = radLadies
