import React, { useState,useEffect } from 'react'

import Tooltip from '@mui/material/Tooltip'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { StyledIconButton } from './styles'

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
            
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible, {passive: true})
        return () => {window.removeEventListener('scroll',toggleVisible)}
    },[visible])
    
    const scollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    
    return (
        <Tooltip title="Scroll to top">
            <StyledIconButton
                sx={{ display: visible ? 'flex' : 'none' }}
                onClick={scollToTop}
            >
                <ExpandLessIcon />
            </StyledIconButton>
        </Tooltip>
    )
}

export default ScrollToTopButton
