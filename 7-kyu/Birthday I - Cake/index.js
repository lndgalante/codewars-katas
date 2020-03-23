/*
  Title:
    Birthday I - Cake

  Description:
    It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x).
    Please note this is not reality, and your age can be anywhere up to 1,000. Yes, you would look a mess.

    As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out.
    They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

    When your friend jumps out of the cake, he/she will knock some of the candles to the floor.
    If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.

    You will work out the number of candles that will fall from the provided string (y).
    You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

    example: 'abc' --> a=97, b=2, c=99 --> y total = 198.

    If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.

  Kata Link:
    https://www.codewars.com/kata/5805ed25c2799821cb000005

  Discuss Link:
    https://www.codewars.com/kata/5805ed25c2799821cb000005/discuss

  Solutions Link:
    https://www.codewars.com/kata/5805ed25c2799821cb000005/solutions
*/

// Long Solution
const getTotalFallenCandles = (y) => {
  return y
    .split('')
    .reduce((acc, char, index) => acc + (index % 2 === 0 ? char.charCodeAt() : char.charCodeAt() - 96), 0)
}

const cake = (x, y) => (x * 0.7 > getTotalFallenCandles(y) ? 'That was close!' : 'Fire!')

// Function Export
module.exports = cake
