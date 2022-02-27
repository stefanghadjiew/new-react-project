import React, {Fragment,useState} from 'react'
import Backdrop from '@mui/material/Backdrop'
import {Container,ActionsContainer,Image,ImageContainer,ImageInfoWrapper,InfoContainer} from './styles'
import { CustomIconButton,CustomButton,Subtitle } from '../../../Components'
import CloseIcon from '@mui/icons-material/Close'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddIcon from '@mui/icons-material/Add'
import { useGlobalContext } from '../../../GlobalContext/GlobalContext'
import MediaQueries from '../../../responsive/MediaQueries'
import { likeAphoto } from '../../../GlobalContext/actions'
import { pages } from '../../../api/apiConstants'
import CustomPopover from '../Popover/Popover.jsx'
import { useNavigate } from 'react-router-dom'




const ImageBackdrop = ({openImageBackdrop,closeImageBackdrop}) => {
    const [dropdownMenu,setDropdownMenu] = useState(false)
    const { isMobile } = MediaQueries()
    const {appState,dispatch} = useGlobalContext()
    const {photos,user} = appState
    const {currentlyDisplayedImage,currentlyDisplayedImageStatistics} = photos
    const imageViews = currentlyDisplayedImageStatistics?.views?.total 
    const imageDownloads = currentlyDisplayedImageStatistics?.downloads?.total 
    const image = currentlyDisplayedImage[0]
    const imageSrc = image?.urls?.small
    const imageAlt = image?.alt_description
    const dowlnoadUrls = image?.urls
    const navigate = useNavigate()
    
    
    const handleLikePhoto = () => {
        !user 
            ? navigate('/login')
            : likeAphoto(dispatch,pages.PHOTOS,image.id)
    }
    
    const toggleMenu = () => {
        setDropdownMenu(!dropdownMenu)
    }

    return (
        <Fragment>
            <Backdrop sx={{padding: isMobile ? 0 : '2rem',zIndex:10}} open={openImageBackdrop}>
                <Container>
                    <CustomIconButton 
                        sx={{position:'absolute',top:'1rem',left:'1rem'}} 
                        icon={<CloseIcon/>} 
                        onClick={closeImageBackdrop}
                        tooltipTitle='Close'/>
                    <CustomPopover/>
                    <ActionsContainer>
                        <CustomIconButton 
                            sx={{borderRadius:0,marginRight:".5rem"}} 
                            icon={<FavoriteBorderIcon/>} 
                            tooltipTitle="Like photo"
                            onClick={handleLikePhoto}/>
                        <CustomIconButton sx={{borderRadius:0,marginRight:'.5rem'}} icon={<AddIcon/>} tooltipTitle="Add to collection"/>
                        <CustomButton buttonText="Download free" sx={{margin:'0 .1rem 0 0',borderRadius:'2px 0 0 2px',padding:'0 .5rem'}}/>
                        
                    </ActionsContainer>
                    <ImageContainer sx={{width:'70vw',height:'80%'}}>
                        <Image 
                            src={imageSrc}
                            alt={imageAlt}
                            loading="lazy"
                        />
                    </ImageContainer>
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
                </Container>
            </Backdrop>
        </Fragment>
    )
}

export default ImageBackdrop
