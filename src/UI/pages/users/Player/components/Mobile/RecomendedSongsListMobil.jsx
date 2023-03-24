import React, { useState } from "react";
import { cancionesRecomendadas } from "../../../../../../data/recomendedSongs";
import { RecomendedSongs, MiniatureSong, Td, Tr,ShowSongs,ShowSongsLogo,PlainButton, HideSongs  } from "../../../../../Styles/Pages/PlayerStyles/PlayerMobileStyle";

function RecomendedSongsListMobile() {
    const [showSongs, setShowSongs] = useState(false);

    return (
      <>
      <ShowSongs>
      {/* <ShowSongsLogo> Songs </ShowSongsLogo >  */}
        <PlainButton onClick={() => setShowSongs(true)}>Mostrar canciones recomendadas</PlainButton>
        </ShowSongs>
        <RecomendedSongs show={showSongs}>
          {cancionesRecomendadas.map(cancion => (
            <Tr key={cancion.id}>
              <Td>{cancion.cancion}</Td>
              <Td>{cancion.autor}</Td>
              <Td>
                <MiniatureSong src={cancion.foto} alt={cancion.cancion} />
              </Td>
            </Tr>
          ))}
          <HideSongs>
          <PlainButton onClick={() => setShowSongs(false)}>Cerrar</PlainButton>
          </HideSongs>
        </RecomendedSongs>
      </>
    );
  }

export default RecomendedSongsListMobile;