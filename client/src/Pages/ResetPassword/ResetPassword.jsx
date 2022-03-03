import React from 'react'
import useInput from '../../CustomHooks/useInput'
import { 
    PageWrapper,
    CustomButton,
    H3,
    Form,
    CustomInput,
    BackButton,
    Logo 
} from '../../Components'
import {changePassword} from '../../GlobalContext/actions'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'

const ResetPassword = () => {

    const newPassword = useInput('')
    const repeatNewPassword = useInput('')
    const navigate = useNavigate()
    const { dispatch, appState } = useGlobalContext()
    const { user } = appState
    

    const userInfo = {
        email : user?.email,
        newPassword: newPassword.value,
        repeatNewPassword: repeatNewPassword.value
    }

    const resetPassword = async () => {
        const res = await changePassword(dispatch,userInfo) 
        if(res?.hasError) return
        setTimeout(() =>{
            navigate('/')
        },500)
    }

    return (
        <PageWrapper 
            sx={{
                padding: '3rem 1.5rem',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <BackButton />
            <Logo
                style={{ justifyContent: 'center', alignItems: 'center' }}
                iconstyle={{ fontSize: '3rem', opacity: '.8' }}
                textstyle={{ fontSize: '2rem', opacity: '.8' }}
            />
            <H3 
                text="Reset Password"
                sx={{
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginTop: '24px',
                }}
            />
            <Form>
               <CustomInput 
                    label="New password" 
                    type="password" 
                    value={newPassword.value} 
                    onChange={newPassword.onChange} 
                    error={newPassword.error ? true : false}
                    helperText={newPassword.error}
                />
                <CustomInput 
                    label="Repeat new password" 
                    type="password" 
                    value={repeatNewPassword.value} 
                    onChange={repeatNewPassword.onChange} 
                    error={repeatNewPassword.error ? true : false}
                    helperText={repeatNewPassword.error}
                />
                <CustomButton
                    buttonText="Reset password"
                    disabled={
                        newPassword.error !== ''
                        || repeatNewPassword.error !== ""
                    }
                    onClick={resetPassword}
                />
            </Form>
        </PageWrapper>
    )
}

export default ResetPassword
