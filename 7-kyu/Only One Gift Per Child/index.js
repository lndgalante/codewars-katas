/*
  Title:
    Only One Gift Per Child

  Description:
    Santa is handing out gifts in the kindergarten.
    Many toddlers are around there and everyone should have the opportunity to have a seat on Santa's lap.
    But there's Peter, a 5 year old boy, who is a bit naughty. He tries to get two gifts.
    After he got the first one, he lines up again in the queue of children.

    But fortunately Santa is not alone. His elves keep a list with the names of the children,
    which already were on Santa's lap. We know, that each child name is unique.
    If a child tries to get a second gift, the elves will tell Santa.

    OK, let's help Santa and his elves with a simple function handOutGift() (hand_out_gift in Ruby, HandOutGift in C# ) which takes the name of the next child.
    If this child already got a gift, it must throw an error in order to remind Santa.

  Examples:
    handOutGift("Peter");
    handOutGift("Alison");
    handOutGift("John");
    handOutGift("Maria");
    handOutGift("Peter"); // <-- must throw an error

  Kata Link:
    https://www.codewars.com/kata/only-one-gift-per-child

  Discuss Link:
    https://www.codewars.com/kata/only-one-gift-per-child/discuss

  Solutions Link:
    https://www.codewars.com/kata/only-one-gift-per-child/solutions
*/

// Long Solution
/*
const childsWithGifts = {}

const handOutGift = name => {
  if (childsWithGifts[name]) throw new Error(`${name} already has a gift`)
  childsWithGifts[name] = true
}
*/

// Alternative Solution
const handOutGift = (() => {
  const childsWithGifts = []

  return name => {
    if (childsWithGifts.includes(name)) {
      throw new Error(`${name} already has a gift`)
    }

    childsWithGifts.push(name)
  }
})()

// Function Export
module.exports = handOutGift
