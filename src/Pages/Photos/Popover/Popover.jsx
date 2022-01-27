import React, { Fragment,useState,useRef }from 'react'
import Popover from '@mui/material/Popover';
import { UserAvatar,CustomIconButton,CloseButton,CustomButton } from '../../../Components';
import { useTheme } from '@emotion/react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Box } from '@mui/system';
import { Container,ButtonsContainer } from './styles';

const CustomPopover = () => {
    const parentRef = useRef()
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme()
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    
    return (
        <Fragment>
            <UserAvatar onMouseEnter={handlePopoverOpen}/>
            <Box ref={parentRef}>
                <Popover
                    container={parentRef.current}
                    PaperProps={{
                        sx : {
                            background: theme.themeColors.dark.background,
                            boxShadow:'4px 8px 8px 4px',
                            marginTop:'1rem',
                            padding:'2rem',
                        
                        }}}
                    id="mouse-over-popover"
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Container>
                        <UserAvatar containerSx={{position:'static',top:0,left:0}}/>
                        <CloseButton 
                                onClick={handlePopoverClose} 
                                sx={{position:'absolute',top:'.15rem',right:'.15rem',color:theme.themeColors.dark.text}}/>
                        <Container>
                            <CustomIconButton 
                                icon={<PersonAddIcon/>}
                                tooltipTitle="Follow"
                                sx={{borderRadius:'2px',marginRight:'5px'}}
                                />
                            <CustomIconButton 
                                icon={<AccessibilityNewIcon/>}
                                tooltipTitle="Hire"
                                sx={{borderRadius:'2px'}}
                                />
                        </Container>
                        {/* </ButtonsContainer> */}
                    </Container>
                    <CustomButton style={{minWidth:"300px",borderRadius:'2px',marginTop:'4rem'}} buttonText="Vie profile"/>
                </Popover>
            </Box>
        </Fragment>
    )
}

export default CustomPopover
