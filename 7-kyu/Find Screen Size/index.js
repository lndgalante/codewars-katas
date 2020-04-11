/*
  Title:
    Find Screen Size

  Description:
    Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits.
    He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box.
    Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

    The Challenge
    Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

  Kata Link:
    https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f

  Discuss Link:
    https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/discuss

  Solutions Link:
    https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/solutions
*/

// Long Solution
const findScreenHeight = (width, ratio) => {
  const [widthRatio, heightRatio] = ratio.split(':')
  const height = width * (heightRatio / widthRatio)

  return `${width}x${height}`
}

// Function Export
module.exports = findScreenHeight
