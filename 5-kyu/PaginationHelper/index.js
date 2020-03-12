/*
  Title:
    PaginationHelper

  Description:
    For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class,
    which is a utility class helpful for querying paging information related to an array.

    The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page.
    The types of values contained within the collection/array are not relevant.

  Examples:
    const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

    helper.pageCount(); // should == 2
    helper.itemCount(); // should == 6
    helper.pageItemCount(0); // should == 4
    helper.pageItemCount(1); // last page - should == 2
    helper.pageItemCount(2); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on

    helper.pageIndex(5); // should == 1 (zero based index)
    helper.pageIndex(2); // should == 0
    helper.pageIndex(20); // should == -1
    helper.pageIndex(-10); // should == -1

  Kata Link:
    https://www.codewars.com/kata/paginationhelper

  Discuss Link:
    https://www.codewars.com/kata/paginationhelper/discuss

  Solutions Link:
    https://www.codewars.com/kata/paginationhelper/solutions
*/

// Long Solution
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.pages = []

    this.splitInPages()
  }

  // Returns the number of items within the entire collection
  itemCount() {
    return this.collection.length
  }

  // Returns the number of pages
  pageCount() {
    return Math.round(this.itemCount() / this.itemsPerPage)
  }

  // Generates the pages
  splitInPages() {
    const totalPages = this.pageCount()
    const collection = [...this.collection].map((data, i) => ({
      data,
      originalIndex: i,
    }))

    for (let i = 0; i < totalPages; i++) {
      this.pages.push({
        element: collection.splice(0, this.itemsPerPage),
        page: i,
      })
    }
  }

  // Returns the number of items on the current page. page_index is zero based.
  // This method should return -1 for pageIndex values that are out of range
  pageItemCount(pageIndex) {
    return this.pages[pageIndex] ? this.pages[pageIndex].element.length : -1
  }

  // Determines what page an item is on. Zero based indexes
  // This method should return -1 for itemIndex values that are out of range
  pageIndex(itemIndex) {
    return this.pages.findIndex(page =>
      page.element.find(element => element.originalIndex === itemIndex)
    )
  }
}

// Function Export
module.exports = PaginationHelper
