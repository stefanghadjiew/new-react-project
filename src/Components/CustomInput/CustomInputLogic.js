import { useState } from 'react'

const CustomInputLogic = () => {
    const [inputValue, setInputValue] = useState()
    const [errors, setErrors] = useState({})

    const validateInput = (type, value) => {
        switch (type) {
            case 'email':
                const validRegex =
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                errors.email = value.match(validRegex)
                    ? ''
                    : 'This is not a valid email address'
                break
            case 'password':
                errors.password =
                    value.length > 5
                        ? ''
                        : 'Password must be atleast 6 characters'
                break
            default:
                return errors
        }
        setErrors(errors)
    }

    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
        validateInput(e.currentTarget.type, e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return {
        inputValue,
        handleChange,
        validateInput,
        errors,
    }
}

export default CustomInputLogic
