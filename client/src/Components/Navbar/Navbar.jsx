import React, { Fragment } from 'react'
import MediaQueries from '../../responsive/MediaQueries'
import Logo from '../Logo/Logo.jsx'
import CustomButton from '../CustomButton/CustomButton.jsx'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import {
    Wrapper,
    InnerWrapper,
    StyledNavbarContainer,
    StyledNavbarItemsContainer,
    ToggleMenuWrapper,
} from './styles'
import StaticResources from './staticResources.js'
import Drawer from '../Drawer/Drawer'
import SettingsIcon from '@mui/icons-material/Settings';
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import useInput from '../../CustomHooks/useInput'
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog'

const Navbar = () => {
    const navigate = useNavigate()
    const { isTablet } = MediaQueries()
    const { appState } = useGlobalContext()
    const { user } = appState
    const openConfirmationDialog = useInput(false)
    const openBackdrop = () => {
        openConfirmationDialog.setValue(true)
    }
    
    const { 
        renderMenuItems,
        renderLanguages,
        renderDropdownMenuItems
    } = StaticResources()

    

    return (
        <Wrapper>
            <ConfirmationDialog 
                openConfirmationDialog={openConfirmationDialog} 
                title="Are you sure you want to logout?"/>
            <InnerWrapper>
                <StyledNavbarContainer>
                    <Logo />
                    {isTablet ? (
                        <ToggleMenuWrapper>
                            <Fragment>
                                {user === null
                                ? <CustomButton
                                    buttonText="Sign up"
                                    style={{
                                        marginTop: '0px',
                                        padding: '1.25rem',
                                    }}
                                    onClick={() => navigate('/signup')}
                                />
                                : <CustomButton
                                    buttonText="Logout"
                                    style={{
                                        marginTop: '0px',
                                        padding: '1.25rem',
                                    }}
                                    onClick={openBackdrop}
                                />
                                }
                            </Fragment>
                            <Drawer 
                                icon={<MenuIcon style={{ fontSize: '30px' }} />}
                                menuItems={renderDropdownMenuItems}
                                languages={renderLanguages}/>
                        </ToggleMenuWrapper>
                    ) : (
                        <StyledNavbarItemsContainer>
                            {renderMenuItems}
                            <Drawer
                                icon={<SettingsIcon/>}
                                languages={renderLanguages}
                                />
                        </StyledNavbarItemsContainer>
                    )}
                </StyledNavbarContainer>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Navbar
