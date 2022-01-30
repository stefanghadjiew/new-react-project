import { DescriptionAndIcon } from './styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import CheckIcon from '@mui/icons-material/Check'
import Radio from '@mui/material/Radio'
import { Subtitle } from '../../../Components'

const offerDescriptions = [
    'Unused downloads transfer to the next month',
    'Additional images are $1 each',
    'Print or digital use (excluding items for resale)',
    'Use for marketing and advertising',
    'Printing rights - up to 500,000 copies',
    'Life-long rights to use images',
]
const monthlyOfferPricings = [
    { title: '25 Images /mo', price: '$36.25' },
    { title: '75 Images /mo', price: '$69' },
    { title: '150 Images /mo', price: '$99' },
    { title: '750 Images /mo', price: '$199' },
]

const yearlyOfferPricings = [
    { title: '30 Images /mo', price: '$299' },
    { title: '75 Images /mo', price: '$699' },
    { title: '150 Images /mo', price: '$999' },
    { title: '750 Images /mo', price: '$1,999' },
]

export const renderOfferDescriptions = offerDescriptions.map((desc, i) => (
    <DescriptionAndIcon>
        <CheckIcon
            sx={{
                marginRight: '10px',
                color: 'rgba(255,255,255,.8)',
            }}
        />
        <Subtitle key={i} text={desc} sx={{ fontSize: '12px' }} />
    </DescriptionAndIcon>
))

export const renderMonthlyOfferPricings = monthlyOfferPricings.map(
    (offer, i) => (
        <FormControlLabel
            key={i}
            value={offer.price}
            label={
                <>
                    <Subtitle text={offer.title} />
                    <Subtitle
                        text={`${offer.price} - $${(
                            +offer.title.split(' ')[0] /
                            offer.price.split('$')[1]
                        ).toFixed(2)} per image`}
                        sx={{ marginBottom: '1rem' }}
                    />
                </>
            }
            control={<Radio />}
        />
    )
)

export const renderYearlyOfferPricings = yearlyOfferPricings.map((offer, i) => (
    <FormControlLabel
        key={i}
        value={offer.price}
        label={
            <>
                <Subtitle text={offer.title} />
                <Subtitle
                    text={`${offer.price} - $${(
                        +offer.title.split(' ')[0] / offer.price.split('$')[1]
                    ).toFixed(2)} per image`}
                    sx={{ marginBottom: '1rem' }}
                />
            </>
        }
        control={<Radio />}
    />
))
