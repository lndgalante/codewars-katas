/*
  Title:
    Slaphead

  Description:
    Being a bald man myself, I know the feeling of needing to keep it clean shaven.
    Nothing worse that a stray hair waving in the wind.

    You will be given a string(x).Clean shaved head is shown as "-" and stray hairs are shown as "/".
    our task is to check the head for stray hairs and get rid of them.

    You should return the original string, but with any stray hairs removed.
    Keep count of them though, as there is a second element you need to return:

    0 hairs --> "Clean!"
    1 hair --> "Unicorn!"
    2 hairs --> "Homer!"
    3-5 hairs --> "Careless!"
    >5 hairs --> "Hobo!"

    So for this head: "------/------" you should return:
    ["-------------", "Unicorn!"]

  Kata Link:
    https://www.codewars.com/kata/slaphead

  Discuss Link:
    https://www.codewars.com/kata/slaphead/discuss

  Solutions Link:
    https://www.codewars.com/kata/slaphead/solutions
*/

// Long Solution
/*
const bald = x => {
  const strayHairs = [...x].reduce((total, hair) => (hair === '/' ? total + 1 : total), 0)
  const cleanShave = x.replace(/\//g, '-')
  let message = ''

  if (strayHairs > 5) message = 'Hobo!'
  if (strayHairs <= 5) message = 'Careless!'
  if (strayHairs === 0) message = 'Clean!'
  if (strayHairs === 1) message = 'Unicorn!'
  if (strayHairs === 2) message = 'Homer!'

  return [cleanShave, message]
}
*/

// Short Solution
const bald = x => [
  x.replace(/\//g, '-'),
  (['Clean', 'Unicorn', 'Homer', 'Careless', 'Careless', 'Careless'][x.split('/').length - 1] || 'Hobo') + '!',
]

// Function Export
module.exports = bald
