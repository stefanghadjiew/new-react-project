import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { Subtitle } from '../../../Components'

const standardLicense = [
    { title: '3 Images', price: '$14.00' },
    { title: '11 Images', price: '$5.90' },
    { title: '25 Images', price: '$3.96' },
    { title: '100 Images', price: '$2.99' },
]

const extendedLicense = [
    { title: '1 Image', price: '$89' },
    { title: '5 Images', price: '$71.80' },
    { title: '25 Images', price: '$63.96' },
]

export const renderStandardLicense = standardLicense.map((offer, i) => (
    <FormControlLabel
        key={i}
        value={offer.price}
        label={
            <>
                <Subtitle text={offer.title} />
                <Subtitle
                    text={offer.price + ' ' + 'per image'}
                    sx={{ marginBottom: '1rem' }}
                />
            </>
        }
        control={<Radio />}
    />
))

export const renderExtendedLicense = extendedLicense.map((offer, i) => (
    <FormControlLabel
        key={i}
        value={offer.price}
        label={
            <>
                <Subtitle text={offer.title} />
                <Subtitle text={offer.price} sx={{ marginBottom: '1rem' }} />
            </>
        }
        control={<Radio />}
    />
))
