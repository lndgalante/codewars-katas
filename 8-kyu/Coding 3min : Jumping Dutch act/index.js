/*
  Title:
    Coding 3min : Jumping Dutch act

  Description:
    This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

    #Task:
      Mr. despair wants to jump off Dutch act, So he came to the top of a building.

      Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant;
      When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

      Input: ```floor```, The height of the building (floor)

      Output: a string, The voice of despair(When jumping Dutch act)

  Examples:
      sc(2)  should return ```"Aa~ Pa! Aa!"```

      It means:
      ```
      Mr. despair jumped from the 2 floor, the voice is "Aa~"
      He fell on the ground, the voice is "Pa!"
      He did not die immediately, and the final voice was "Aa!"
      ```
      sc(6)  should return ```"Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"```

      sc(7)  should return ```"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"```

      sc(10)  should return ```"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"```

      if ```floor```<=1, Mr. despair is safe, return ```""```

  Kata Link:
    https://www.codewars.com/kata/coding-3min-jumping-dutch-act

  Discuss Link:
    https://www.codewars.com/kata/coding-3min-jumping-dutch-act/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-3min-jumping-dutch-act/solutions
*/

// Long Solution
const sc = floor => {
  if (floor <= 1) return ''
  if (floor > 6) return `${'Aa~ '.repeat(floor - 1)}Pa!`
  if (floor <= 6) return `${'Aa~ '.repeat(floor - 1)}Pa! Aa!`
}

// Function Export
module.exports = sc
