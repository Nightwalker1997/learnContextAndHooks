import React, {useContext, useEffect} from "react";
import {BookContext} from "../Contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const {books} = useContext(BookContext);
    useEffect(() =>{
        console.log(books)
    }, [books])

    return books.length ?
        (
            <div>
                <ul>
                    {books.map((currentElement, index) => <BookDetails book={currentElement} key={index}/>)}
                </ul>
            </div>
        )
        :
        (
            <div>
                No Books to Read. Hello freeTime:)
            </div>
        )

}
export default BookList;