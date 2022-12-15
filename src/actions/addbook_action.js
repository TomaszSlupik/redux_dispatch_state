let bookid = 0

export const addBook = (text) => ({
  type: "ADD_BOOK",
  complete: false, 
  id: bookid++,
  text
})
