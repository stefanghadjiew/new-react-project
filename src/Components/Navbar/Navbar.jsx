import React from 'react'
import DropdownMenu from './DropdownMenu/DropdownMenu.jsx'
import MediaQueries from '../../responsive/MediaQueries'
import NavbarLogic from './NavbarLogic'
import Logo from '../Logo/Logo.jsx'
import CustomButton from '../CustomButton/CustomButton.jsx'
import LanguageIcon from '@mui/icons-material/Language'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import {
    Wrapper,
    InnerWrapper,
    StyledNavbarContainer,
    StyledNavbarItemsContainer,
    ToggleMenuWrapper,
} from './styles'

const Navbar = () => {
    const navigate = useNavigate()
    const { isTablet } = MediaQueries()
    const {
        toggleMenu,
        toggleSelectLanguage,
        renderMenuItems,
        renderLanguages,
        renderDropdownMenuItems,
    } = NavbarLogic()

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
                            <DropdownMenu
                                toggle={toggleSelectLanguage}
                                menuItems={renderLanguages}
                                menuIcon={
                                    <LanguageIcon
                                        style={{ fontSize: '30px' }}
                                    />
                                }
                            />
                            <DropdownMenu
                                toggle={toggleMenu}
                                menuItems={renderDropdownMenuItems}
                                menuIcon={
                                    <MenuIcon style={{ fontSize: '30px' }} />
                                }
                            />
                        </ToggleMenuWrapper>
                    ) : (
                        <StyledNavbarItemsContainer>
                            {renderMenuItems}
                        </StyledNavbarItemsContainer>
                    )}
                </StyledNavbarContainer>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Navbar
