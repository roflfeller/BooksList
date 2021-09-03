import React from 'react';
import ListBookItem from './ListBookItem';
import { useLogicListBooks } from './useLogicListBooks';
import { AnimatePresence } from 'framer-motion';

const ListBooks = () => {

    const data = useLogicListBooks();

    return (
        <div className={'ListBooks'}>
            <ul>
                <AnimatePresence>
                   {data.listBooks.length ? data.listBooks.map((element) => {
                    return (
                        <ListBookItem
                            book={element}
                            key={element.id}
                            selectForEdit={data.selectForEdit}
                            deleteBook={data.deleteBook}

                        />
                    )
                }) : <p className={'emptyList'}>Книги отсутствуют в списке</p>} 
                </AnimatePresence>
                
            </ul>
        </div>
    )
};

export default ListBooks;