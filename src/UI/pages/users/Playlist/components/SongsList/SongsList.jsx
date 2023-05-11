import {
  ContainerSong, ContainerSongInfo, ContainerSongsList, ImgSong, NameArtist, SongSettings, TitleSmall
} from '../../../../../Styles/Pages/Users/PlaylistStyle';
import { songs } from "../../../../../../songs.js";
import { setPlayer } from '../../../../../../utils/player/player';
import { store } from '../../../../../../utils/redux/store';

export const SongsList = () => {
  const player = store.getState().player;
  return (
    <ContainerSongsList>
      {
        songs?.map((song, index) => {
          return (
            <ContainerSong key={index} onClick={() => setPlayer({
              ...player,
              withSong: true,
              queu: songs,
              index: index
            })}>
              <ImgSong src={song.img} />
              <ContainerSongInfo >
                <TitleSmall>{song.title}</TitleSmall>
                <NameArtist>{song.artist}</NameArtist>
              </ContainerSongInfo>
              <SongSettings>...</SongSettings>
            </ContainerSong>
          )
        })
      }
    </ContainerSongsList>
  )
}
