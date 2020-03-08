/*
  Title:
    Naming Files

  Description:
    Naming multiple files can be a pain sometimes.

    Task:
    Your job here is to create a function that will take three parameters, fmt, nbr and start, and create an array of nbr elements formatted according to frm with the starting index start. fmt will have <index_no> inserted at various locations; this is where the file index number goes in each file.

    Description of edge cases:
      If nbr is less than or equal to 0, or not whole, return an empty array.
      If fmt does not contain '<index_no>', just return an array with nbr elements that are all equal to fmt.
      If start is not an integer, return an empty array.

    What each parameter looks like:
      typeof frm #=> 'string'
        : "text_to_stay_constant_from_file_to_file <index_no>"
      typeof nbr #=> 'number'
        : number_of_files
      typeof start #=> 'number'
        : index_no_of_first_file
      typeof (nameFile(frm, nbr, start)) #=> 'array'

  Examples:
    nameFile("IMG <index_no>", 4, 1)
      #=> ["IMG 1", "IMG 2", "IMG 3", "IMG 4"])
    nameFile("image #<index_no>.jpg", 3, 7)
      #=> ["image #7.jpg", "image #8.jpg", "image #9.jpg"]
    nameFile("#<index_no> #<index_no>", 3, -2)
      #=> ["#-2 #-2", "#-1 #-1", "#0 #0"]

  Kata Link:
    https://www.codewars.com/kata/naming-files

  Discuss Link:
    https://www.codewars.com/kata/naming-files/discuss

  Solutions Link:
    https://www.codewars.com/kata/naming-files/solutions
*/

// Long Solution
const nameFile = (fmt, nbr, start) => {
  if (nbr <= 0 || !Number.isInteger(start)) return []
  if (!fmt.includes('<index_no>')) return Array.from({ length: nbr }, () => fmt)

  return Array.from({ length: nbr }, (_, index) => fmt.replace(/<index_no>/g, () => `${start + index}`))
}

// Function Export
module.exports = nameFile
