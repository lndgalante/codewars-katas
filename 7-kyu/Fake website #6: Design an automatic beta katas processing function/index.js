/*
  Title:
    Fake website #6: Design an automatic beta katas processing function

  Description:
    Fake website #6:Design an automatic beta katas processing function

    #Solemn declaration:
    This Kata is purely fictitious and any similarity is just coincidence ;-)

    #Story
    With your help (in the last Kata), John start building his new web site c0dewars.com.

    This time you need to help John write an automatic beta katas processing function, the function name is kataStatus. Function  accept 1 parameter betaKata.
    betaKata is an object that contains some datas of a kata, like this:
    {name:"Training JS #1",issue:0,vote:[4,3,2,1]},
    rank:[8,7,6],example:true,random:true}

    Your task is return a string that is the description of the state of kata. In accordance with the following rules:

    #The rules:

    If there are issues reported(value of issue != 0), should return kata status as:
    "Beta Status:Waiting for issues to be resolved"

    If the number of votes is less than 5, should return kata status as:
    "Beta Status:Testing & feedback needed"

    If the number of ranks is less than 8, should return kata status as:
    "Beta Status:Ranking feedback needed"

    If Kata does not have the example testcase or/and the random testcase(one of them value=false), should return kata status as:
    "Beta Status:Example testcases needed"    //example=false;random=true
    "Beta Status:Random testcases needed"     //random=false;example=true
    "Beta Status:Example and random testcases needed"  //example=false;random=false

    If the above datas is OK, you need to calculate its vote scores and average rank, and then return kata status as:
    "Kata approved. vote scores:xxx, rank:nkyu"xxx is the sum of array vote; n is the average of the array rank, you need round it to an integer.



  Examples:
    kataStatus({name:"Training JS #1",issue:1,vote:[4,3,2,1],
    rank:[8,7,6],example:true,random:true}) should return
      "Beta Status:Waiting for issues to be resolved"

    kataStatus({name:"Training JS #1",issue:0,vote:[4,3,2,1],
    rank:[8,7,6],example:true,random:true}) should return
      "Beta Status:Testing & feedback needed"

    kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
    rank:[8,7,6],example:true,random:true}) should return
      "Beta Status:Ranking feedback needed"

    kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
    rank:[8,7,6,8,7,6,8,7,6],example:false,random:true}) should return
      "Beta Status:Example testcases needed"

    kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
    rank:[8,7,6,8,7,6,8,7,6],example:true,random:false}) should return
      "Beta Status:Random testcases needed"

    kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
    rank:[8,7,6,8,7,6,8,7,6],example:false,random:false}) should return
      "Beta Status:Example and random testcases needed"
    kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
    rank:[8,7,6,8,7,6,8,7,6],example:true,random:true}) should return
      "Kata approved. vote scores:14, rank:7kyu"

  Notes:
    Can be expected: there will not be a lot of people to solve this Kata, because it is a bit complex. So if you solve this Kata, please don't forget rank and vote it. It's important for Kata to break away from the beta process, very thanks!

  Kata Link:
    https://www.codewars.com/kata/fake-website-number-6-design-an-automatic-beta-katas-processing-function

  Discuss Link:
    https://www.codewars.com/kata/fake-website-number-6-design-an-automatic-beta-katas-processing-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/fake-website-number-6-design-an-automatic-beta-katas-processing-function/solutions
*/

// Long Solution
function kataStatus(betaKata) {
  const { vote, rank } = betaKata

  const sumVotes = vote.reduce((acc, voteQuantitiy) => acc + voteQuantitiy, 0)
  const sumRank = rank.reduce((acc, rankQuantity) => acc + rankQuantity, 0)

  const {
    vote: { length: totalVotes },
    rank: { length: totalRank },
  } = { vote, rank }

  const rules = [
    ({ issue }) => {
      return issue > 0 && 'Beta Status:Waiting for issues to be resolved'
    },
    () => {
      return totalVotes < 5 && 'Beta Status:Testing & feedback needed'
    },
    () => {
      return totalRank < 8 && 'Beta Status:Ranking feedback needed'
    },
    ({ example, random }) => {
      return example === false && random === true && 'Beta Status:Example testcases needed'
    },
    ({ example, random }) => {
      return example === true && random === false && 'Beta Status:Random testcases needed'
    },
    ({ example, random }) => {
      return example === false && random === false && 'Beta Status:Example and random testcases needed'
    },
  ]

  const [ruleNotApplied] = rules.map(rule => rule(betaKata)).filter(Boolean)
  if (ruleNotApplied) return ruleNotApplied

  return `Kata approved. vote scores:${sumVotes}, rank:${Math.round(sumRank / totalRank)}kyu`
}

// Function Export
module.exports = kataStatus
