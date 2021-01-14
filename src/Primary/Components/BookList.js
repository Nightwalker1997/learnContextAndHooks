// import React, {useContext, useEffect} from 'react';
// import {ThemeContext} from "../Contexts/ThemeContext";
// import {BooksContext} from "../Contexts/BooksContext";
//
// const BookList = () => {
//     const {books} = useContext(BooksContext);
//     const {isLightTheme, light, dark} = useContext(ThemeContext);
//     const theme = isLightTheme ? light : dark;
//     useEffect(() => {
//         console.log(books)
//     }, [books])
//     return(
//         <div className={"book-list"} style={{background: theme.bg, color: theme.syntax}}>
//             <ul>
//                 {books.map(index => <li style={{background: theme.ui}} key={index.id}>{index.title}</li>)}
//             </ul>
//         </div>
//     );
// };
//
// // class BookList extends React.Component {
// //     static contextType = ThemeContext;
// //     render() {
// //         const {isLightTheme, light, dark} = this.context;
// //         const theme = isLightTheme ? light : dark;
// //         return (
// //
// //             <div className={"book-list"} style={{background: theme.bg, color: theme.syntax}}>
// //                 <ul>
// //                     <li style={{background: theme.ui}}>the way of kings</li>
// //                     <li style={{background: theme.ui}}>the name of wind</li>
// //                     <li style={{background: theme.ui}}>the final empire</li>
// //                 </ul>
// //             </div>
// //         );
// //     }
// // }
//
// export default BookList;