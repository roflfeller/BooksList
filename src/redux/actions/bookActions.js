import { SET_BOOK_INFO,SUBMIT_BOOK_INFO,CLEAR_CURRENT_BOOK_INFO,DELETE_BOOK,ADD_BOOK_IN_LIST } from "../reducers/bookReducer/bookTypes";


export function setInfoBookAction(obj) {
    return {
      type: SET_BOOK_INFO,
      payload: obj,
    };
}

export function submitInfoBookAction(obj) {
  return {
    type: SUBMIT_BOOK_INFO,
    payload: obj,
  };
}


export function clearCurrentBookInfoAction() {
  return {
    type: CLEAR_CURRENT_BOOK_INFO,
  };
}

export function deleteBookAction (newListBook) {
  return {
    type: DELETE_BOOK,
    payload: newListBook
  };
}

export function addBookInListAction (newListBook) {
  return {
    type: ADD_BOOK_IN_LIST,
    payload: newListBook
  };
}
