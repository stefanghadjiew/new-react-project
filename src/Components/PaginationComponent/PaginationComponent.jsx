import React from 'react'
import { StyledPagination } from './styles'

const PaginationComponent = ({ count, page, onChange }) => {
    return (
        <StyledPagination
            count={count}
            page={page}
            onChange={onChange}
            siblingCount={2}
            boundaryCount={2}
            size="large"
        />
    )
}

export default PaginationComponent
