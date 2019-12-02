/*
  Title:
    Happy Coding : Correct The Leaderboard

  Description:
    Who is the No.1 programmer on Codewars? Yes, Of course, his name is myjinxin2015.
    Wow, please don't throw tomatoes and stinky eggs ;-)

    Unfortunately, due to site failures (or hacker attacks?), The leaderboard often shows incorrect rankings.

    Your task is: accept a string leaderBoard as argument, correct it and output it.

  Examples:
    For leaderBoard=
      #1 g964
      #2 myjinxin2015
      #3 SteffenVogel_79
      #4 smile67
      #5 Voile

      the output should be:
      #1 myjinxin2015
      #2 g964
      #3 SteffenVogel_79
      #4 smile67
      #5 Voile

    For leaderBoard=
      #1 Voile
      #2 g964
      #3 SteffenVogel_79
      #4 smile67
      #5 myjinxin2015

      the output should be:
      #1 myjinxin2015
      #2 g964
      #3 SteffenVogel_79
      #4 smile67
      #5 Voile

  Kata Link:
    https://www.codewars.com/kata/happy-coding-correct-the-leaderboard

  Discuss Link:
    https://www.codewars.com/kata/happy-coding-correct-the-leaderboard/discuss

  Solutions Link:
    https://www.codewars.com/kata/happy-coding-correct-the-leaderboard/solutions
*/

// Long Solution
/*
const correct = leaderBoard => {
  const array = leaderBoard.split(/\n/g)
  const myJinxinIndex = array.findIndex(developer => developer.includes('myjinxin2015'))

  if (myJinxinIndex >= 0) {
    const [leader] = array
    const myJinxin = array[myJinxinIndex]

    const leaderPosition = leader.match(/#\d/g)
    const myJinxinPosition = myJinxin.match(/#\d/g)

    array[0] = myJinxin.replace(/#\d/g, leaderPosition)
    array[myJinxinIndex] = leader.replace(/#\d/g, myJinxinPosition)
  }

  return array.join('\n')
}
*/

// Short Solution
const correct = leaderBoard => leaderBoard.replace(/#1 (.*)([^]*? )(myjinxin2015(?=$|\n))/, '#1 $3$2$1')

// Function Export
module.exports = correct
