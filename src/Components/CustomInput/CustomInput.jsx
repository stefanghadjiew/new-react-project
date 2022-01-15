import React from 'react'

import CustomInputLogic from './CustomInputLogic'
import { useLocation } from 'react-router-dom'

import StyledTextField from './styles'

const CustomInput = ({ ...props }) => {
    // Dont do real-time validation if the inputs are rendered in the login page (onSubmit form function will do it)
    const { pathname } = useLocation()
    const isLoginPage = pathname === '/login'

    const { value, handleChange, errors } = CustomInputLogic()
    const { type, variant, style, outsidevalue, handleoutsidevalue } = props

    return (
        <StyledTextField
            size="small"
            variant={variant ? variant : 'standard'}
            value={outsidevalue || outsidevalue === '' ? outsidevalue : value}
            onChange={handleoutsidevalue ? handleoutsidevalue : handleChange}
            error={isLoginPage ? false : errors[type] ? true : false}
            helperText={isLoginPage ? '' : errors[type] ? errors[type] : ''}
            style={style}
            {...props}
        />
    )
}

export default CustomInput
