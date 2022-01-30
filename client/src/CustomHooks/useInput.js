import { useState } from 'react'
import { validateInput } from '../utils/validations'
import { useLocation } from 'react-router-dom'

const useInput = (initialValue) => {
    const [inputValue,setInputValue] = useState(initialValue)
    const [error,setError] = useState(false)
    const { pathname } = useLocation()
    //Dont validate input value on login page
    const isSignup = pathname === '/signup'
    const isLogin = pathname === '/login'
    
    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
        if(isLogin || isSignup) {
            setError(validateInput(e.currentTarget.type, e.currentTarget.value))
        } 
    }

    return {
        value:inputValue,
        setValue:setInputValue,
        error,
        onChange:handleChange
    }
}

export default useInput
