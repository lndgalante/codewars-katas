/*
  Title:
    Playing with Sets : Intersection

  Description:
    Set objects are new JavaScript built-in objects defined since ECMAScript 2015

    A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . .
    BUT some "Set operations" are missing, like . . . Intersection

    A new set can be constructed by determining which members two sets have "in common".
    The intersection of A and B, denoted by A ∩ B, is the set of all things that are members of both A and B.
    If A ∩ B = ∅, then A and B are said to be disjoint.

    Examples:
      {1, 2} ∩ {1, 2} = {1, 2}.
      {1, 2} ∩ {2, 3} = {2}.

    Task
    Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.

  Examples:
    A = new Set([1,2]);
    B = new Set([2,3]);

    C = inter(A,B) // -> {2}

  Kata Link:
    https://www.codewars.com/kata/parallel-resistors

  Discuss Link:
    https://www.codewars.com/kata/parallel-resistors/discuss

  Solutions Link:
    https://www.codewars.com/kata/parallel-resistors/solutions
*/

// Long Solution
/*
const inter = (s1, s2) => {
  const [arr1, arr2] = [[...s1], [...s2]]
  return new Set(arr1.filter(num => arr2.includes(num)))
}
*/

// Short Solution
const inter = (s1, s2) => new Set([...s1].filter(num => s2.has(num)))

// Function Export
module.exports = inter
