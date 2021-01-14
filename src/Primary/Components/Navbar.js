// import React, {useContext} from 'react';
// import {ThemeContext} from "../Contexts/ThemeContext";
// import {AuthContext} from "../Contexts/AuthContext";
//
// const Navbar = () => {
//     const {isLightTheme, light, dark} = useContext(ThemeContext);
//     const {isAuthenticated, toggleAuth} = useContext(AuthContext);//for check if user is logged in or not
//     const theme = isLightTheme ? light : dark;
//
//     return(
//         <nav style={{background: theme.ui, color: theme.syntax}}>
//             <h1>Context App</h1>
//             <div onClick={toggleAuth}>
//                 {isAuthenticated ? "logged in" : "logged out"}
//             </div>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     );
// }
//
// // class Navbar extends Component {
// //     // static contextType = ThemeContext;
// //     // const {isLightTheme, light, dark} = context;
// //     // const theme = isLightTheme ? light : dark;
// //
// //     render() {
// //         return (
// //             <AuthContext.Consumer>
// //                 {(authContext) => (
// //                         <ThemeContext.Consumer>
// //                             {(themeContext) => {
// //                                 const {isLightTheme, light, dark} = themeContext;
// //                                 const {isAuthenticated, toggleAuth} = authContext;//for check if user is logged in or not
// //                                 const theme = isLightTheme ? light : dark;
// //                                 return(
// //                                     <nav style={{background: theme.ui, color: theme.syntax}}>
// //                                         <h1>Context App</h1>
// //                                         <div onClick={toggleAuth}>
// //                                             {isAuthenticated ? "logged in" : "logged out"}
// //                                         </div>
// //                                         <ul>
// //                                             <li>Home</li>
// //                                             <li>About</li>
// //                                             <li>Contact</li>
// //                                         </ul>
// //                                     </nav>
// //                                 )
// //                             }}
// //                         </ThemeContext.Consumer>
// //                     )}
// //             </AuthContext.Consumer>
// //         );
// //     }
// // }
//
// export default Navbar;