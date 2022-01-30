import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
/* import { useGlobalContext } from '../../GlobalContext/GlobalContext' */
import {
    Form,
    CustomInput,
    CustomButton,
    H3,
    Subtitle,
    PageWrapper,
    BackButton,
} from '../../Components'
import useInput from '../../CustomHooks/useInput'

const SignUp = () => {
    const siteKey = process.env.REACT_APP_RECAPTCHA_TEST_SITE_KEY
    const email = useInput('')
    const password = useInput('')

    //change this later
    const onChange = (value) => {
        console.log(`Recaptcha value is : ${value}`)
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
                <ReCAPTCHA
                    style={{ width: '100%', display: 'flex' }}
                    sitekey={siteKey}
                    onChange={onChange}
                />
                <CustomButton
                    buttonText="Continue"
                    style={{ width: '100%', height: '38px', fontSize: '14px' }}
                    disabled={true}
                />
            </Form>
        </PageWrapper>
    )
}

export default SignUp
