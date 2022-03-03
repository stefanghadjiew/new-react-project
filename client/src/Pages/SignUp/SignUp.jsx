import React , {Suspense, lazy, useState } from 'react'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import actionTypes from '../../GlobalContext/actionTypes'
import { useNavigate } from 'react-router-dom'
import {
    Form,
    CustomInput,
    CustomButton,
    H3,
    Subtitle,
    PageWrapper,
    BackButton,
    Loader
} from '../../Components'
import useInput from '../../CustomHooks/useInput'
import { setUser } from '../../GlobalContext/actions'

const ReCAPTCHA = lazy(() => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(import('react-google-recaptcha'))
        },500)
    })
  
})

const SignUp = () => {
    const siteKey = process.env.REACT_APP_RECAPTCHA_TEST_SITE_KEY
    const email = useInput('')
    const password = useInput('')
    const [recaptchaAnswer, setRecaptchaAnswer] = useState()
    const { dispatch } = useGlobalContext()
    const navigate = useNavigate()
    
    const userInfo = {
        email: email.value,
        password: password.value
    }

    const onChange = (value) => {
        setRecaptchaAnswer(value)
    }

    const signUpUser = async () => {
        if(recaptchaAnswer ) {
           const res =  await setUser(dispatch,userInfo,false)
           if(res?.hasError) return 
           navigate('/')
        } else {
            dispatch({
                type: actionTypes.OPEN_MESSAGE_TOAST,
                payload: {isOpen:true,message: 'Recaptcha error',severity:'error'}
            }) 
        }
    }

    
    return (
        <PageWrapper
            style={{
                padding: '3rem 1.5rem',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <BackButton />
            <H3
                text="Get Started"
                style={{
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginTop: '24px',
                }}
            />
            <Subtitle
                text="Get your API key in seconds"
                style={{ marginBottom: '2rem' }}
            />
            <Suspense fallback={<Loader/>}>
                <Form style={{ maxWidth: '24rem' }}>
                    <CustomInput
                        label="Email address"
                        type="email"
                        style={{ minWidth: '19rem' }}
                        error={email.error ? true : false}
                        value={email.value}
                        helperText={email.error}
                        onChange={email.onChange}
                    />
                    <CustomInput
                        label="Password"
                        type="password"
                        style={{ minWidth: '19rem' }}
                        error={password.error ? true : false}
                        value={password.value}
                        onChange={password.onChange}
                        helperText={password.error}
                    />
                    <Suspense fallback={<Loader/>}>
                        <ReCAPTCHA
                            style={{ width: '100%', display: 'flex' }}
                            sitekey={siteKey}
                            onChange={onChange}
                        />
                    </Suspense>
                    <CustomButton
                        buttonText="Continue"
                        style={{ width: '100%', height: '38px', fontSize: '14px' }}
                        disabled={
                            recaptchaAnswer === undefined
                            || email.error !== ''
                            || password.error !== ''
                        }
                        onClick={signUpUser}
                    />
                </Form>
            </Suspense>
        </PageWrapper>
    )
}

export default SignUp
