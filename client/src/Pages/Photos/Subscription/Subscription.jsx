import React, { useState } from 'react'
import { Subtitle, H5, CustomButton } from '../../../Components'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import RadioGroup from '@mui/material/RadioGroup'
import {
    Wrapper,
    StyledSwitch,
    StyledOfferWrapper,
    StyledOfferDescription,
} from './styles'
import {
    renderOfferDescriptions,
    renderMonthlyOfferPricings,
    renderYearlyOfferPricings,
} from './staticResources'

const Subscription = () => {
    const [switchState, setSwitchState] = useState({ on: true })
    const [offerValue, setOfferValue] = useState({ monthly: '', yearly: '' })

    const handleMonthlyValueChange = (e) => {
        setOfferValue({ monthly: e.currentTarget.value, yearly: '' })
    }

    const handleYearlyValueChange = (e) => {
        setOfferValue({ monthly: '', yearly: e.currentTarget.value })
    }

    const handleSwitchState = () => {
        setSwitchState({ on: !switchState.on })
        setOfferValue({ monthly: '', yearly: '' })
    }

    return (
        <Wrapper>
            <H5
                text="Subscription"
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
                        <Subtitle text="Billed Monthly" />
                        <StyledSwitch
                            defaultChecked
                            inputProps={{
                                'aria-label': 'ant design',
                            }}
                            value={switchState.on}
                            onChange={handleSwitchState}
                        />
                        <Subtitle text="Yearly" />
                    </Stack>
                    <StyledOfferWrapper>
                        <StyledOfferDescription>
                            {renderOfferDescriptions}
                        </StyledOfferDescription>
                        <StyledOfferDescription>
                            <RadioGroup
                                value={
                                    switchState.on
                                        ? offerValue.monthly
                                        : offerValue.yearly
                                }
                                onChange={
                                    switchState.on
                                        ? handleMonthlyValueChange
                                        : handleYearlyValueChange
                                }
                            >
                                {switchState.on
                                    ? renderMonthlyOfferPricings
                                    : renderYearlyOfferPricings}
                            </RadioGroup>
                        </StyledOfferDescription>
                    </StyledOfferWrapper>
                    <CustomButton
                        sx={{ width: '17rem' }}
                        buttonText="Buy Now"
                    />
                </FormControl>
            </Box>
        </Wrapper>
    )
}

export default Subscription
