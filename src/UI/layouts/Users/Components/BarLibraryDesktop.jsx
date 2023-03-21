import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryDesktopStyle";
import { useAuth0 } from "@auth0/auth0-react";

export const BarLibraryDesktop = () => {
    const {user: {picture}} = useAuth0();
  return (
        <Main>
        <ContainerIconsMenuLibrary>
            <IconSettings/>
            <IconAddAlbum/>
            <IconAvatar>              
                <UserAvatar src={picture}/>
            </IconAvatar>
        </ContainerIconsMenuLibrary>
        </Main>
  )
}