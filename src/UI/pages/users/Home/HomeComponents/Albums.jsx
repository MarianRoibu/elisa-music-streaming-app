import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllAlbums from "../../../../../api/albums/fetchAllAlbums";
import { useAuth0 } from "@auth0/auth0-react";
import { ContainerAlbum, AlbumBackground, Album, AlbumTitle, AlbumImage, ContainerAlbumPrincipal, } from "../../../../Styles/Pages/Users/HomePageStyles/AlbumsStyle"
import { Skeleton } from "antd";

const Albums = () => {
  const { getAccessTokenSilently } = useAuth0();

  const { data: albums, isLoading } = useQuery(["allAlbums"], async () => {
    const token = await getAccessTokenSilently();
    const data = await fetchAllAlbums(token);
    return data;
  });

  const albumsPerRow = 6;
  const numRows = 6;

  const rowTitles = ["Pop Favorites", "Hip Hop Jams","Indie Vibes"];

  return (
    <ContainerAlbumPrincipal>

      {[...Array(numRows)].map((_, rowIndex) => (
        <div key={rowIndex}>
          <h3>{rowTitles[rowIndex]}</h3>
          <ContainerAlbum>
            {isLoading ? (
              <Skeleton>
                <Album />
              </Skeleton>
            ) : (
              albums &&
              albums
                .slice(rowIndex * albumsPerRow, (rowIndex + 1) * albumsPerRow)
                .map((album) => (
                  <Link key={album._id} to={`/album/${album._id}`}>
                    <Album>
                      <AlbumBackground
                        image={album.img && album.img.secure_url}
                      />
                      <AlbumImage
                        src={album.img && album.img.secure_url}
                        alt={album.title}
                      />
                      <AlbumTitle>{album.title}</AlbumTitle>
                    </Album>
                  </Link>
                ))
            )}
          </ContainerAlbum>
        </div>
      ))}
    </ContainerAlbumPrincipal>
  );
};

export default Albums;


