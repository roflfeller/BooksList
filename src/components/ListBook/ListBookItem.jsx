import React,{useCallback,useState} from 'react';
import closeIcon from '../../assets/img/close.svg';
import CustomButton from '../UI/Button'



const ListBookItem = ({book,selectForEdit,deleteBook}) => {
    //сделано исключительно для того, чтобы показать, что я знаю useCallback))
    const editHandler = useCallback(() => {
        selectForEdit(book)
        //eslint-disable-next-line
    },[book]);

    const [open,setOpen] = useState(false);
    
    return (
            <div className={"sectionBook"}>
                <img src={closeIcon} alt="" className={'BookItem-delete'}  onClick={() => deleteBook(book)}/>
                <div className={'sectionBook-info'}>
                    <p className={'sectionBook-info__boldText'}>{book.nameBook}</p>
                    <p className={'sectionBook-info__text'}>Автор:<span className="colored">{book.author}</span></p>
                    { open ?
                        <>
                            <p className={'sectionBook-info__text'}>Год издания:<span className="colored">{book.yearPub}</span></p>
                            <p className={'sectionBook-info__text'}>Кол-во страниц:<span className="colored">{book.counterPages}</span></p>
                        </>
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
    )
};

export default ListBookItem;