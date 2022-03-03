import { styled } from '@mui/material/styles'

export const ActionsContainer = styled('div')(({theme}) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'1rem 1.5rem',
    marginTop:'2rem'
}))

export const DialogBody = styled('div')(({theme}) =>({
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    padding:'2rem',
    backgroundColor: theme.custom.backgroundColor
}))
