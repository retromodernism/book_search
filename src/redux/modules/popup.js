const moduelName = "popup";

const SET_POPUP = `${moduelName}/SET_POPUP`;

const defaultState = {
  popupIsActive: false,
  book: null,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_POPUP:
      return {
        ...state,
        popupIsActive: payload.popupIsActive,
        book: payload.book,
      };
    default:
      return state;
  }
};

export const closePopup = () => (dispatch) => {
  dispatch({
    type: SET_POPUP,
    payload: {
      popupIsActive: false,
      book: null,
    },
  });
};

export const openPopup = (book) => (dispatch) => {
  dispatch({
    type: SET_POPUP,
    payload: {
      popupIsActive: true,
      book: book,
    },
  });
};
