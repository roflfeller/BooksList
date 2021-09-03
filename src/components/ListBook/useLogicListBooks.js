import { useDispatch, useSelector } from 'react-redux';
import { deleteBookAction, setInfoBookAction,addBookInList } from '../../redux/actions/bookActions';



export const useLogicListBooks = () => {
    const dispatch = useDispatch();
    const listBooks = useSelector(state => state.book.books) 
    
    const selectForEdit = (obj) => {
        dispatch(setInfoBookAction(obj));
    };

    const deleteBook = (book) => {
        const filteredBookList = listBooks.filter((elem,id) => {
            return elem.id !== book.id;
        });
        dispatch(deleteBookAction(filteredBookList));
    };


    return {
        dispatch,
        listBooks,
        selectForEdit,
        deleteBook,
    }
}