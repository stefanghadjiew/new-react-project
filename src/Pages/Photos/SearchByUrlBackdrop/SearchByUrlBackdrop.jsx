import React from 'react'
import Backdrop from '@mui/material/Backdrop'

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import CloseIcon from '@mui/icons-material/Close'
import {
    H3,
    CustomInput,
    CustomIconButton,
    CustomButton,
} from '../../../Components'
import { StyledContainer, SerachByUrlContainer, Content, Or } from './styles'

const SearchByUrlBackdrop = ({
    open,
    onCloseClick,
    inputValue,
    handleSearchByUrl,
    onSearchClick,
}) => {
    return (
        <Backdrop sx={{ zIndex: '10' }} open={open}>
            <StyledContainer>
                <SerachByUrlContainer>
                    <CustomIconButton
                        onClick={onCloseClick}
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                        }}
                        icon={<CloseIcon />}
                    />
                    <Content>
                        <CameraAltOutlinedIcon
                            sx={{
                                color: 'rgba(255,255,255,.8)',
                                fontSize: '56px',
                                marginBottom: '1rem',
                            }}
                        />
                        <H3
                            sx={{
                                textAlign: 'center',
                                fontSize: '1.5rem',
                            }}
                            text="Drag & drop your image here or click here to select an image"
                        />
                        <Or>or</Or>
                        <CustomInput
                            label="Paste img URL"
                            outsidevalue={inputValue}
                            handleoutsidevalue={handleSearchByUrl}
                        />
                        <CustomButton
                            style={{ width: ' 100%' }}
                            buttonText="Search"
                            onClick={onSearchClick}
                        />
                    </Content>
                </SerachByUrlContainer>
            </StyledContainer>
        </Backdrop>
    )
}

export default SearchByUrlBackdrop
