const moduleName = "books";

const GET_BOOKS = `${moduleName}/GET_BOOKS`;

const defaultState = {
  books: [],
};

/*
  { type: GET_POSTS, payload: { ... } }
*/
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload };
    default:
      return state;
  }
};

export const getBooks = (searchRequest) => async (dispatch) => {
  searchRequest = searchRequest.replace(/ /gi, "+");

  try {
    await fetch(`https://openlibrary.org/search.json?title=${searchRequest}`)
      .then((response) => response.json())
      .then((data) =>
        data.docs.filter(
          (book) =>
            book.hasOwnProperty("key") &&
            book.hasOwnProperty("title") &&
            book.hasOwnProperty("publish_date") &&
            book.hasOwnProperty("publisher") &&
            book.hasOwnProperty("isbn") &&
            book.hasOwnProperty("cover_i")
        )
      )
      .then((books) =>
        books.map((book) => ({
          title: book.title,
          authors: book.author_name,
          publcationDates: book.publish_date,
          publishers: book.publisher,
          isbn: book.isbn,
          img: {
            normal: `//covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
            min: `//covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
          },
        }))
      )
      .then((data) =>
        dispatch({
          type: GET_BOOKS,
          payload: data,
        })
      );
  } catch (error) {
    console.log(error);
  }
};
