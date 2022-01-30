import React from 'react'
import { StyledServiceItem } from './styles'

const ServiceItem = ({ title, id, icon }) => {
    return (
        <StyledServiceItem key={id}>
            {icon}
            <>{title}</>
        </StyledServiceItem>
    )
}

export default ServiceItem
