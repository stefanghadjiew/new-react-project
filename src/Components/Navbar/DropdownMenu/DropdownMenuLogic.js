import { useState } from 'react';

const DropdownMenuLogic = (toggle) => {
    
    const [anchorEl,setAnchorEl] = useState(null);
    
    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
        toggle()
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return {
        anchorEl,
        handleOpen,
        handleClose
    }
};

export default DropdownMenuLogic;