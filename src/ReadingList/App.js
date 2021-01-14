import React from "react";
import BooksContextProvider from "./Contexts/BookContext";
import Navbar from "./Components/NavBar";
import BookList from "./Components/BookList";
import BookForm from './Components/BookForm'

const App = () => {
    return(
        <div align={"center"}>
            <BooksContextProvider>
                <Navbar/>
                <BookList />
                <BookForm />
            </BooksContextProvider>

        </div>
    );
}

export default App;