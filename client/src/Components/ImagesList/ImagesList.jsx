import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import H3 from '../CustomTypography/H3.jsx'
import MediaQueries from '../../responsive/MediaQueries'
import Likes from './Likes.jsx'
import { useGlobalContext } from '../../GlobalContext/GlobalContext.js'
import {
    StyledImage,
    DescriptionWrapper,
    Description,
    StyledSubtitle,
} from './styles'
import actionTypes from '../../GlobalContext/actionTypes.js'
import {fetchPhotosStatistics} from '../../GlobalContext/actions'


const ImagesList = ({ images,handleOpenImageBackdrop }) => {
    const { isTablet, isMobile } = MediaQueries()
    const { dispatch } = useGlobalContext()
    
    const handleImageClick = (imageId) => {
        dispatch({type:actionTypes.SET_CURRENT_IMAGE, payload: imageId})
        fetchPhotosStatistics(dispatch,imageId)
        handleOpenImageBackdrop()
    }

    
    return (
        <ImageList 
            sx={{ width: '100%', height: isMobile ? '500vh' : '1800px' }} 
            variant="woven" 
            cols={isMobile ? 1 : isTablet ? 2 : 3} 
            gap={8}>
            {images.map((image) => (
                <ImageListItem 
                    sx={{overflow:'hidden',position:'relative'}} 
                    key={image.img} 
                    onClick={() => handleImageClick(image.id)}>
                        <DescriptionWrapper>
                            <Likes
                                likes={image.likes}
                                user={image.user.username}
                            />
                            <StyledImage
                                src={image.urls.small}
                                style={{objectFit:'cover'}}
                                alt={image.alt_description}
                                loading="lazy"
                            />
                            <Description>
                                <H3
                                    text={
                                        image.description
                                            ? image.description
                                            : 'No description avaliable :('
                                    }
                                    style={{
                                        fontSize: '18px',
                                        lineHeight: '24px',
                                        marginBottom: '0px',
                                        textAlign: 'left',
                                    }}
                                />
                                <StyledSubtitle text="This is a test to see if what i`m doing is going to work" />
                            </Description>
                        </DescriptionWrapper>
            </ImageListItem>
            ))}
      </ImageList> 
    )
}

export default ImagesList
