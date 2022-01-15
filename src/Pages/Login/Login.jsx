import React from 'react'
import {
    Logo,
    Form,
    GoogleLoginLogic,
    CustomInput,
    CustomButton,
    H3,
    CustomLink,
    PageWrapper,
    BackButton,
} from '../../Components'
import GoogleIcon from '@mui/icons-material/Google'
import { useNavigate } from 'react-router-dom'
import { LinkWrapper, Divider, Line, Or } from './styles'

const Login = () => {
    const signIn = GoogleLoginLogic()
    const navigate = useNavigate()

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
            <Logo
                style={{ justifyContent: 'center', alignItems: 'center' }}
                iconstyle={{ fontSize: '3rem', opacity: '.8' }}
                textstyle={{ fontSize: '2rem', opacity: '.8' }}
            />
            <H3
                text="Login"
                style={{
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginTop: '24px',
                }}
            />
            <Form>
                <CustomInput label="Email address" type="email" />
                <CustomInput label="Password" type="password" />
                <CustomButton
                    buttonText="Login"
                    style={{ width: '100%', height: '38px', fontSize: '14px' }}
                />
                <CustomButton
                    buttonText="Sign in with Google"
                    onClick={signIn}
                    style={{
                        width: '100%',
                        fontSize: '14px',
                    }}
                    startIcon={<GoogleIcon style={{ fontSize: '1rem' }} />}
                />
                <LinkWrapper>
                    <CustomLink
                        link="#"
                        title="Forgot your password?"
                        style={{ fontSize: '14px', fontWeight: '500' }}
                    />
                </LinkWrapper>
                <Divider>
                    <Line />
                    <Or>Or</Or>
                </Divider>
                <CustomButton
                    buttonText="Create an account"
                    style={{
                        width: '100%',
                        fontSize: '14px',
                        fontWeight: 'bold',
                    }}
                    onClick={() => navigate('/signup')}
                />
            </Form>
        </PageWrapper>
    )
}

export default Login
