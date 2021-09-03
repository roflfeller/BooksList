import { motion } from 'framer-motion';
import React,{useCallback,useState} from 'react';
import closeIcon from '../../assets/img/close.svg';
import CustomButton from '../ui/Button'



const ListBookItem = ({book,selectForEdit,deleteBook}) => {
    //сделано исключительно для того, чтобы показать, что я знаю useCallback))
    const editHandler = useCallback(() => {
        selectForEdit(book)
    },[book]);

    const [open,setOpen] = useState(false);

    
    return (
        <motion.li 
            className={'BookItem'}
            animate={{ opacity: 1 }}
        >
            <div className={"sectionBook"}>
                <img src={closeIcon} alt="" className={'BookItem-delete'}  onClick={() => deleteBook(book)}/>
                <div className={'sectionBook-info'}>
                    <p className={'sectionBook-info__boldText'}>{book.nameBook}</p>
                    <p className={'sectionBook-info__text'}>Автор:<span className="colored">{book.author}</span></p>
                    { open ?
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} 
                        >
                            <p className={'sectionBook-info__text'}>Год издания:<span className="colored">{book.yearPub}</span></p>
                            <p className={'sectionBook-info__text'}>Кол-во страниц:<span className="colored">{book.counterPages}</span></p>
                        </motion.div>
                        : 
                        null
                    }
                    <div className={'sectionBook-info__wrapBtn'}>
                        <CustomButton 
                            label={open ? 'Скрыть' : 'Подробнее'}
                            onClick={() => setOpen((prev) => !prev)}
                            className={'secondaryButton'}
                        />
                        <CustomButton 
                            label="Редактировать" 
                            className={'greenButton'}
                            onClick={editHandler}
                        />
                    </div>
                </div>
            </div>
        </motion.li>
    )
};

export default ListBookItem;