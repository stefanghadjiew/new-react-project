import React from 'react';
import { StyledImage } from './styles';
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import MediaQueries from '../../responsive/MediaQueries';

const Image = ({src,alt}) => {

    const {isTablet,isMobile} = MediaQueries()
    const {appState} = useGlobalContext()
    const {photos} = appState
    const {currentlyDisplayedImage} = photos
    const image = currentlyDisplayedImage[0]
    
    return (
        <StyledImage 
            sx={{width:isMobile ? '100vw' : isTablet ? '70vw' : '50vw', height: isMobile ? '35vh' : '50vh'}}
            src={src ? src : image.urls.small} 
            alt={alt ? alt : image.alt_description}
            loading="lazy"
        />
    )
}

export default Image
