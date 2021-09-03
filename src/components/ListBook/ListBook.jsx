import React from 'react';
import ListBookItem from './ListBookItem';
import { useLogicListBooks } from './useLogicListBooks';
import { AnimatePresence, motion } from 'framer-motion';

const ListBooks = () => {

    const data = useLogicListBooks();

    return (
        <div className={'ListBooks'}>
            <ul>
                <AnimatePresence initial={false}>
                   {data.listBooks.length ? data.listBooks.map((element) => {
                        return (
                            <motion.li
                                key={element.id}
                                positionTransition
                                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition:{duration:0.3} }}
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                            >
                               <ListBookItem
                                    book={element}
                                    key={element.id}
                                    selectForEdit={data.selectForEdit}
                                    deleteBook={data.deleteBook}
                                /> 
                            </motion.li>
                            
                        )
                }) : <motion.p 
                       initial={{opacity:0}}
                       animate={{opacity:1}}
                       transition={{delay: 0.3}}
                       className={'emptyList'}
                    >
                        Книги отсутствуют в списке
                    </motion.p>} 
                </AnimatePresence>
                
            </ul>
        </div>
    )
};

export default ListBooks;