import React, {useContext} from "react";
import {BookContext} from "../Contexts/BookContext";

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return(<li key={book.id} onClick={() => dispatch({type: "REMOVE_BOOK", id: book.id})}>{book.title} Author is {book.author}.</li>)

}

export default BookDetails;