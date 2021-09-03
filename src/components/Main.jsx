import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormBook from './FormBook/FormBook';
import ListBooks from './ListBook/ListBook';


const Main = () => {

    const listBooks = useSelector(state => state.book.books);

    useEffect(() => {
        localStorage.setItem('listBooks',JSON.stringify(listBooks));
    },[listBooks]);

    return (
        <>
            <h1 className={'heading'}>Список книг</h1>
            <div className={"main"}>
                <aside className="main-leftColumn">
                    <FormBook/>
                </aside>
                <div className="main-rightColumn">
                    <ListBooks/>
                </div>
             </div> 
        </>
    )
};

export default Main;