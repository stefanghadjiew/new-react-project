import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import H3 from '../CustomTypography/H3.jsx'
import MediaQueries from '../../responsive/MediaQueries'
import Likes from './Likes.jsx'
import {
    StyledImage,
    DescriptionWrapper,
    Description,
    StyledSubtitle,
} from './styles'

const ImagesList = ({ images }) => {
    const { isTablet, isMobile } = MediaQueries()

    return (
        <ImageList
            cols={isMobile ? 1 : isTablet ? 2 : 3}
            rowHeight={250}
            style={{ gap: '24px' }}
        >
            {images &&
                images.map((image) => (
                    <ImageListItem
                        cols={1}
                        rows={1}
                        key={image.id}
                        style={{
                            overflow: 'hidden',
                            borderRadius: '10px',
                            position: 'relative',
                        }}
                    >
                        <DescriptionWrapper>
                            <Likes
                                likes={image.likes}
                                user={image.user.username}
                            />
                            <StyledImage
                                src={image.urls.small}
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
