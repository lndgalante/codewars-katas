/*
  Title:
    Image Files Only

  Description:
    Build a function that will take an array of filenames (as string) and return an array of array.
    Each array will provide 3 informations about the image file: the full filename, its name and the extension.

    Detect the image files based on the end of the filename which is their format (extension).
    Image files are defined as jpg, gif, png, tiff, svg and bmp.
    So "puppies.jpg" is a image file while "puppies.html" is not.

  Examples:
    Input: ["imgName.extension", "notAnImg"]
    Output: [["imgName.extension", "imgName", "extension"], null]

    imageFilter(["index.html", "favicon.gif"])
    return [null, ["favicon.gif", "favicon", "gif"]]

  Notes:
    !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.

  Kata Link:
    https://www.codewars.com/kata/image-files-only

  Discuss Link:
    https://www.codewars.com/kata/image-files-only/discuss

  Solutions Link:
    https://www.codewars.com/kata/image-files-only/solutions
*/

// Long Solution
/*
const imageFilter = arr => {
  const allowedExtensions = ['jpg', 'gif', 'png', 'tiff', 'svg', 'bmp']
  const filteredFiles = arr.map(file => {
    const [fileExtension] = file.match(/[^.]+$/g)
    const [fileName] = file.split('.')

    if (!fileName) return null
    return allowedExtensions.includes(fileExtension.toLowerCase()) ? [file, fileName, fileExtension] : null
  })

  return filteredFiles
}
*/

// Short Solution
const imageFilter = array => array.map(file => file.match(/(\w+)\.(jpg|gif|png|tiff|svg|bmp)$/i))

// Function Export
module.exports = imageFilter
