// import React, {useState, useEffect} from 'react';
// import {v1 as uuid} from 'uuid';
// import NewSongForm from "./NewSongForm";
//
// const SongList = () => {
//     const [songs, setSongs] = useState([
//         {title: "one", id: 1},
//         {title: "two", id: 2},
//         {title: "three", id: 3}
//     ]);
//     const [age, setAge] = useState(20);
//     const addSong = (newTitle) =>{
//         setSongs([...songs, {title:newTitle, id: uuid()}])
//     }
//     useEffect(() => {
//         //can use it for communicate with database
//         console.log(songs);
//     }, [songs])
//     useEffect(() => {
//         //can use it for communicate with database
//         console.log(age);
//     }, [age])
//     return (
//         <div className={"song-list"}>
//             <ul>
//                 {songs.map(index => <li key={index.id}>{index.title}</li>)}
//             </ul>
//             <NewSongForm AddSong={addSong}/>
//
//             <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
//         </div>
//     );
//
// }
//
// export default SongList;