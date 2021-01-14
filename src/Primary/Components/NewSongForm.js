// import React, {useState} from "react";
// const NewSongForm = ({ AddSong }) => {
//     const [title, setTitle] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         AddSong(title);
//         setTitle('');
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="">Song Title: </label>
//             <input type="text" required={true} autoFocus={true} value={title} onChange={(e) => setTitle(e.target.value)}/>
//             <input type="submit" value={"Add song"}/>
//         </form>
//     );
// }
//
// export default NewSongForm;