import React from 'react'
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


const Navbar = () => {
    const navigate = useNavigate()
    const { isTablet } = MediaQueries()
    
    const { renderMenuItems,
        renderLanguages,
        renderDropdownMenuItems} = StaticResources()

    return (
        <Wrapper>
            <InnerWrapper>
                <StyledNavbarContainer>
                    <Logo />
                    {isTablet ? (
                        <ToggleMenuWrapper>
                            <CustomButton
                                buttonText="Sign up"
                                style={{
                                    marginTop: '0px',
                                    padding: '1.25rem',
                                }}
                                onClick={() => navigate('/signup')}
                            />
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
