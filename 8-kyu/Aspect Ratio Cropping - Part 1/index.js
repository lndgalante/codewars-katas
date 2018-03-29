/*
  Title:
    Aspect Ratio Cropping - Part 1

  Description:
    The aspect ratio of an image describes the proportional relationship between its width and its height.
    Most video shown on the internet uses a 16:9 aspect ratio,
    which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9).
    As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920,
    however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

    Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height.
    Round your answers up to the nearest integer.

  Kata Link:
    https://www.codewars.com/kata/aspect-ratio-cropping-part-1

  Discuss Link:
    https://www.codewars.com/kata/aspect-ratio-cropping-part-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/aspect-ratio-cropping-part-1/solutions
*/

// Long Solution
const aspectRatio = (x, y) => [Math.ceil(y * (16 / 9)), y]

// Function Export
module.exports = aspectRatio
