import { sha256 } from 'js-sha256';
const moduleName = "books";

const GET_BOOKS = `${moduleName}/GET_BOOKS`;
const SET_REQUEST = `${moduleName}/SET_REQUEST`;
const SET_SEARCH_HASH = `${moduleName}/SET_SEARCH_HASH`;

const defaultState = {
  books: [],
  searchHash: '',
};

/*
  { type: GET_POSTS, payload: { ... } }
*/
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload };
    case SET_SEARCH_HASH:
      return { ...state, searchHash: payload };
    default:
      return state;
  }
};

export const getBooks = (searchRequest) => async (dispatch) => {
  searchRequest = searchRequest.replace(/ /gi, "+");

  /**
   * Отменить автопоиск
   */
  dispatch({
    type: SET_SEARCH_HASH,
    payload: '',
  });

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
          publicationDates: book.publish_date,
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

export const getBooksWithDelay = (request) => async (dispatch, getState) => {
  request = request.replace(/ /gi, "+");

  const searchHash = sha256(request + Date.now());

  dispatch({
    type: SET_SEARCH_HASH,
    payload: searchHash,
  });

  await new Promise(res => { setTimeout(res, 1000) });

  const state = getState();
  /**
   * Если State.request не изменился через 1 секунду
   * Осуществить поиск
   */
  if (getState().books.searchHash !== searchHash) {
    return;
  }

  try {
    await fetch(`https://openlibrary.org/search.json?title=${request}`)
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
          publicationDates: book.publish_date,
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
}
