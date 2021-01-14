// import React, {createContext, useState} from "react";
//
// export const BooksContext = createContext();
//
// const BooksContextProvider = (props) => {
//     const [books, setBooks] = useState([
//         {title: 'name one', id: 1},
//         {title: 'name two', id: 2},
//         {title: 'name three', id: 3},
//         {title: 'name four', id: 4}
//     ]);
//     return(
//         <BooksContext.Provider value={{books}}>
//             {props.children}
//         </BooksContext.Provider>
//     );
// }
//
// export default BooksContextProvider;