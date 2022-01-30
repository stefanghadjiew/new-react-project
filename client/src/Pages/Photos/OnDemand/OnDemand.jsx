import React, { useState } from 'react'
import { Wrapper } from './styles'
import { H5, Subtitle, CustomButton } from '../../../Components'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { StyledSwitch, StyledOfferDescription } from '../Subscription/styles'
import Stack from '@mui/material/Stack'
import { renderStandardLicense, renderExtendedLicense } from './staticResources'
import RadioGroup from '@mui/material/RadioGroup'

const OnDemand = () => {
    return (
        <Wrapper>
            <H5
                text="On Demand"
                sx={{
                    marginBottom: '1.5rem',
                    lineHeight: '2rem',
                    fontSize: '1.5rem',
                }}
            />
            <Box sx={{ minWidth: '40%' }}>
                <FormControl
                    fullWidth
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Subtitle text="Stand. License" />
                        <StyledSwitch
                            defaultChecked
                            inputProps={{
                                'aria-label': 'ant design',
                            }}
                            /* value={'test'}
                            onChange={} */
                        />
                        <Subtitle text="Ext. License" />
                    </Stack>
                    <StyledOfferDescription>
                        <RadioGroup>{renderStandardLicense}</RadioGroup>
                    </StyledOfferDescription>
                    <CustomButton
                        buttonText="Buy Now"
                        sx={{
                            backgroundColor: '#2c2d3d',
                            border: '1px solid rgba(255,255,255,.8)',
                            width: '17rem',
                        }}
                    />
                </FormControl>
            </Box>
        </Wrapper>
    )
}

export default OnDemand
