// import { useEffect, useState } from 'react';
// import { RecomendedSongs, MiniatureSong, Td, Tr, TableContainer } from "../../../../Styles/Pages/Users/components/PlayerStyles/PlayerStyle";
// import { useAuth0 } from '@auth0/auth0-react';
// import fetchAlbumById from '../../../../../api/albums/getById';
// import fetchSongAll from '../../../../../api/song/fetchGetAll';
// import fetchManyAlbumById from '../../../../../api/albums/getManyById';
// import { useDispatch } from 'react-redux';
// import { setPlayer } from '../../../../../utils/player/player';


// function RecomendedSongsList({ player }) {
//   const { getAccessTokenSilently } = useAuth0();
//   const dispatch = useDispatch();
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [songIds, setSongIds] = useState([]);

//   const handleClickSong = (songId, index) => {
//     // Dispatch the setPlayer action
//     dispatch(
//       setPlayer({
//         ...player,
//         withSong: true,
//         queu: {
//           data: songs,
//           imgAlbum: songs[index]?.album?.img?.secure_url || '',
//         },
//         index: index,
//       })
//     );
//   };

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await fetchSongAll(await getAccessTokenSilently());
//         console.log('API Response:', response);
//         if (response.msg) {
//           return;
//         }
//         console.log('Response Data:', response.data);
  
//         // Extracting the song IDs from the response data
//         const ids = response.data.map(song => song._id);
//         console.log('ids are this', );
//         setSongIds(ids);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
  
//     fetchSongs();
//   }, [getAccessTokenSilently]);
  
//   console.log('Songs:', songs);
  
//   return (
//     <TableContainer>
//       <RecomendedSongs>
//         {loading ? (
//           <div></div>
//         ) : (
//           songs.map((song, index) => (
//             <Tr key={song._id} onClick={() => handleClickSong(song._id, index)}>
//               <Td>{song.title}</Td>
//               <Td>{song.artist}</Td>
//               <Td>
//                 {console.log('Song:', song)}
//                 {song.album && song.album.img && song.album.img.secure_url ? (
//                   <MiniatureSong src={song.album.img.secure_url} />
//                 ) : (
//                   <span>No image available</span>
//                 )}
//               </Td>
//             </Tr>
//           ))
//         )}
//       </RecomendedSongs>
//     </TableContainer>
//   );
// }

// export default RecomendedSongsList;