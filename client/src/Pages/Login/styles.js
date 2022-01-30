import { styled } from '@mui/material/styles'

export const LinkWrapper = styled('div')(() => ({
    display: 'flex',
    marginTop: '24px',
    lineHeight: '24px',
    justifyContent: 'flex-end',
    width: '100%',
}))

export const Divider = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: 'white',
    opacity: '.8',
    position: 'relative',
    marginTop: '1rem',
}))

export const Line = styled('div')(() => ({
    height: '.5px',
    width: '100%',
    backgroundColor: 'white',
    opacity: '.8',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: '-1',
}))

export const Or = styled('div')(() => ({
    paddingLeft: '.5rem',
    paddingRight: '.5rem',

    backgroundColor: '#343645',
}))
