import React ,  { useEffect,Fragment } from 'react'
import { ImageInfoWrapper,InfoContainer } from '../styles'
import { Subtitle } from '../../../../Components'
import { fetchPhotosStatistics } from '../../../../GlobalContext/actions'
import { useGlobalContext } from '../../../../GlobalContext/GlobalContext'

// Not used anywhere (might be a good idea to rethink the way imageInfo is used in ImageBackdrop component)
//Gonna leave this component for now (it is Working)

const ImageInfo = () => {

    const { dispatch,appState } = useGlobalContext()
    const { photos } = appState
    const {currentlyDisplayedImage} = photos
    const imageId = currentlyDisplayedImage[0]?.id
    console.log(imageId)
    const { currentlyDisplayedImageStatistics } = photos
    const imageViews = currentlyDisplayedImageStatistics?.views?.total
    const imageDownloads = currentlyDisplayedImageStatistics?.downloads?.total 
    
    useEffect(() => {
        fetchPhotosStatistics(dispatch,imageId)
    },[imageId,dispatch])

    return (
        <Fragment>
            <ImageInfoWrapper>
                <InfoContainer>
                    <Subtitle text="Views"/>
                    <Subtitle text={imageViews}/>
                </InfoContainer>
                <InfoContainer>
                    <Subtitle text="Downloads"/>
                    <Subtitle text={imageDownloads}/>
                </InfoContainer>
            </ImageInfoWrapper>
        </Fragment>
    )
}

export default ImageInfo
