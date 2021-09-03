import { useDispatch, useSelector } from 'react-redux';
import { deleteBookAction, setInfoBookAction,clearCurrentBookInfoAction } from '../../redux/actions/bookActions';


export const useLogicListBooks = () => {
    const dispatch = useDispatch();
    const listBooks = useSelector(state => state.book.books) 
    const currentBook = useSelector(state => state.book.currentBook);
    
    const selectForEdit = (obj) => {
        dispatch(setInfoBookAction(obj));
    };

    const deleteBook = (book) => {
        const filteredBookList = listBooks.filter((elem,id) => {
            return elem.id !== book.id;
        });

        if(book.id === currentBook.id) {
            dispatch(clearCurrentBookInfoAction());
        };
        
        dispatch(deleteBookAction(filteredBookList));
    };

    return {
        dispatch,
        listBooks,
        selectForEdit,
        deleteBook,
    }
}