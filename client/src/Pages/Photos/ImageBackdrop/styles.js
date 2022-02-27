import { styled } from '@mui/material/styles'

export const Container = styled('div')(({theme}) =>({
    height:'100%',
    width:'100%',
    position:'relative',
    backgroundColor: theme.themeColors.dark.background
}))

export const ActionsContainer = styled('div')(() =>({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    padding:'1rem'
}))

export const ImageContainer = styled('div')(() =>({
    margin:'auto',
    boxShadow:'3px 3px 4px 4px rgba(0,0,0,.3)'
}))

export const Image = styled('img')(() =>({
    width:'100%',
    height:'100%',
    filter: 'brightness(80%)',
}))

export const ImageInfoWrapper = styled('div')(() =>({
    display:'flex',
    padding:'1rem',
    alignItems:'center'
})) 

export const InfoContainer = styled('div')(() =>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    marginRight:'2rem'
}))
