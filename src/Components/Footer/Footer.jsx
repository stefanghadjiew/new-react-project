import React from 'react'

import { useTranslation } from 'react-i18next'
import { H6, H3, CustomButton } from '../../Components'
import FooterLogic from './FooterLogic'
import {
    Wrapper,
    InnerWrapper,
    FooterTop,
    StyledTypography,
    FooterBottom,
} from './styles'

const Footer = () => {
    const { renderFooterPartData1, renderFooterPartData2 } = FooterLogic()

    return (
        <Wrapper>
            <InnerWrapper>
                <FooterTop>
                    <div style={{ display: 'block' }}>
                        <StyledTypography>
                            Let's send your <span>first API call</span>
                        </StyledTypography>
                        <H6
                            style={{ opacity: '0.5' }}
                            text="Get your API key in 10 seconds and start automating workflows."
                        />
                    </div>
                    <div>
                        <CustomButton
                            style={{ margin: 0 }}
                            buttonText={'test if this works'}
                        />
                    </div>
                </FooterTop>
                <FooterBottom>{renderFooterPartData1}</FooterBottom>
                <FooterBottom>{renderFooterPartData2}</FooterBottom>
                <FooterBottom
                    style={{
                        paddingBottom: '105px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <H3
                        style={{
                            fontSize: '16px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            opacity: 1,
                            marginBottom: '10px',
                        }}
                        text="Photoverse"
                    />
                    <H6
                        style={{ lineHeight: '34px', cursor: 'pointer' }}
                        text="The API Company"
                    />
                    <H6
                        style={{ lineHeight: '34px', cursor: 'pointer' }}
                        text="Made in Aksakovo,Bulgaria"
                    />
                </FooterBottom>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Footer
