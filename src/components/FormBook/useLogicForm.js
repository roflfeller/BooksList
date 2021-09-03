import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector,useDispatch } from 'react-redux';
import {submitInfoBookAction,addBookInListAction, clearCurrentBookInfoAction } from '../../redux/actions/bookActions';
import { useMemo } from 'react';

export const useLogicForm = () => {
    const bookForEdit = useSelector(state => state.book.currentBook);
    const listBooks = useSelector(state => state.book.books);
    const dispatch = useDispatch();

    const fields = [
        {name: 'author',label:'Автор',type:'text'},
        {name: 'yearPub',label:'Год издания',type:'number'},
        {name: 'nameBook',label:'Название книги',type:'text'},
        {name: 'counterPages',label:'Кол-во страниц',type:'number'},
    ]

    const initValues = {
        author: bookForEdit.author || '',
        yearPub: bookForEdit.yearPub || '',
        nameBook: bookForEdit.nameBook || '',
        counterPages: bookForEdit.counterPages || '',
    }

    const clearForm = () => {
        dispatch(clearCurrentBookInfoAction());
        formik.resetForm();
    };
    
    const addBook = (book) => {
        const newBook = {
            id: Math.random(),
            ...book,
        };
        const newBookList = [...listBooks,{...newBook}];
        
        dispatch(addBookInListAction(newBookList));
    };

    const editBookList = (values) => {
        const newListBooks = listBooks.map(element => {
            if(element.id === bookForEdit.id) {
                return {...element,...values}
            }
            return element;
        });
        dispatch(submitInfoBookAction(newListBooks));
    }

    const formik = useFormik({
        initialValues: initValues,
        enableReinitialize: true,
        validationSchema: yup.object({
            author: yup
                .string()
                .required('Введите автора'),
            yearPub: yup
                .number()
                .required('Введите год издания'),
            nameBook: yup
                .string()
                .required('Введите имя книги'),
            counterPages: yup
                .number()
                .required('Введите кол-во страниц'),
        }),
        onSubmit: values => {

            if(Object.keys(bookForEdit).length) {
                editBookList(values);
            }else {
                addBook(values);
            };
            
            clearForm();
        },
    });

    const checkNotEmptyField = () => {
        let has = false;

        Object.values(formik.values).forEach((e) => {
            if(e !== '') {
                has = true;
            }
        });

        return has;
    }

    const disabled = JSON.stringify(initValues) === JSON.stringify(formik.values);
    const disabledForClear = !checkNotEmptyField();


     //просто пример для использования useMemo
    const renderLabel = useMemo(() => {
        return bookForEdit.id ? 'Редактировать' : 'Добавить'
    },[bookForEdit.id]);






    return {
        formik,
        fields,
        values:formik.values,
        disabled,
        handleChange:formik.handleChange,
        bookForEdit,
        renderLabel,
        clearForm,
        disabledForClear
    }
}