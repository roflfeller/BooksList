import { SET_BOOK_INFO,CLEAR_CURRENT_BOOK_INFO,SUBMIT_BOOK_INFO,DELETE_BOOK, ADD_BOOK_IN_LIST } from "./bookTypes";

const defaultBooks = [
  {id: 1, nameBook: 'Преступление и наказание',author: 'Фёдор Достоевский',yearPub: 1866,counterPages:672 },
  {id: 2, nameBook: 'Евгений Онегин',author: 'Александр Пушкин',yearPub: 1833,counterPages:400}
];


const initialState = {
  books: JSON.parse(localStorage.getItem('listBooks')) || defaultBooks,
  currentBook: {},
};


export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK_INFO:
            return {
                ...state,
                currentBook: action.payload
            };
        case CLEAR_CURRENT_BOOK_INFO:
            return {
                ...state,
                currentBook: {}
            };
        case DELETE_BOOK:
          return {
            ...state,
            books: action.payload
          }
        case ADD_BOOK_IN_LIST:
          return {
            ...state,
            books: action.payload
          }
        case SUBMIT_BOOK_INFO:
          return {
              ...state,
              books: action.payload
          };
      default:
        return state;
    }
  };
  