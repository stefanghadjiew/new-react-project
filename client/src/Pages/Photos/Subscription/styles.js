import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '62vw',
    maxWidth: '50rem',
    minWidth: '20rem',
    padding: '2.5rem 1.5rem',
    borderRadius: '.5rem',
    marginTop: '4rem',
    boxShadow: 'rgba(255, 255, 255, 0.08) 0px 4px 8px 0px',
    '&:before': {
        content: '"Best Value"',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '1rem',
        position: 'absolute',
        height: '1.5rem',
        top: '-1.5rem',
        right: 0,
        background: theme.themeColors.dark.text,
        width: '100%',
        fontWeight: 'bold',
        color: theme.themeColors.dark.background,
        borderRadius: '8px 8px 0px 0px',
    },
}))

export const StyledSwitch = styled((props) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        color: theme.themeColors.dark.text,
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.themeColors.dark.background,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.themeColors.dark.background,
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}))

export const StyledOfferWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

export const StyledOfferDescription = styled('div')(() => ({
    margin: '1.5rem 1rem 1.5rem 1.5rem',
}))

export const StyledOfferPricing = styled('div')(() => ({}))

export const DescriptionAndIcon = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
}))
