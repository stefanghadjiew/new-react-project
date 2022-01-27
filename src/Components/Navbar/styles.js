import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.themeColors.dark.background,
    padding: '30px',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    [theme.breakpoints.down(500)]: {
        padding: '30px 10px',
    },
}))

export const InnerWrapper = styled('div')(() => ({
    maxWidth: '1110px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
}))

export const StyledNavbarContainer = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

export const StyledNavbarItemsContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white',
    alignItems:'center',
    '& h6': {
        padding: '5px 20px',
    },
}))

export const ToggleMenuWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '150px',
    justifyContent: 'space-between',
    alignItems: 'center',
}))
