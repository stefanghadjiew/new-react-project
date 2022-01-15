import React from 'react'
import { CustomButton, PageWrapper, H3, Subtitle } from '../../Components'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <PageWrapper
            style={{
                padding: '0',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <H3 text="Page not found :(" />
            <Subtitle text="The page you`re looking for cannot be found" />
            <CustomButton
                buttonText="Back to homepage"
                onClick={() => navigate('/')}
            />
        </PageWrapper>
    )
}

export default PageNotFound
