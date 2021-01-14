// import React, {createContext, useState} from 'react';
//
// export const ThemeContext  = createContext();
//
// const ThemeContextProvider = (props) => {
//     const [isLightTheme, setIsLightTheme] = useState(false);
//     const [light, setLight] = useState({syntax: "#555", ui:"#ddd", bg:"#eee"});
//     const [dark, setDark] = useState({syntax: "#ddd", ui:"#333", bg:"#555"})
//     const toggleTheme = () => {
//         this.setState({isLightTheme: !this.state.isLightTheme})
//     }
//
//     return(
//         <ThemeContext.Provider value={{isLightTheme: isLightTheme ,light: light, dark: dark, toggleTheme: toggleTheme}}>
//             {props.children}
//         </ThemeContext.Provider>
//     );
// }
//
// // class ThemeContextProvider extends React.Component {
// //     state = {
// //         isLightTheme: false,
// //         light: {syntax: "#555", ui:"#ddd", bg:"#eee"},
// //         dark: {syntax: "#ddd", ui:"#333", bg:"#555"}
// //     }
// //     toggleTheme = () =>{
// //         this.setState({isLightTheme: !this.state.isLightTheme})
// //     }
// //     render() {
// //         return (
// //             <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
// //                 {this.props.children}
// //             </ThemeContext.Provider>
// //         );
// //     }
// // }
//
// export default ThemeContextProvider;