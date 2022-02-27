import React, { useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { useGlobalContext } from '../../GlobalContext/GlobalContext';
import { Container } from './styles';
import Subtitle from '../CustomTypography/Subtitle.jsx';


const UserAvatar = ({onMouseEnter,containerSx}) => {
    const [displayedUser,setDisplayedUser] = useState()
    const {appState} = useGlobalContext()
    const {photos} = appState
    const {currentlyDisplayedImage} = photos
    const imageExists = currentlyDisplayedImage.length !== 0
    
    useEffect(() => {
        imageExists && setDisplayedUser(currentlyDisplayedImage[0].user)
    },[imageExists,currentlyDisplayedImage])

     

    return (
        displayedUser
            ?   <Container sx={containerSx}>
                    <Avatar 
                        onMouseEnter={onMouseEnter}
                        alt={`${displayedUser.first_name} ${displayedUser.last_name}`} 
                        src={displayedUser.profile_image.small}
                    />
                    <Subtitle style={{marginLeft:'5px'}}text={`${displayedUser.first_name} ${displayedUser.last_name}`}/>
                </Container> 
            : null
    )
}

export default UserAvatar
