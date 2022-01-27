import React from 'react'
import { CustomLink,Subtitle } from '../../../Components'
import MenuItem from '@mui/material/MenuItem';

const StaticResources = (downloadUrls,height,width,handleClose) => {
        const raw = downloadUrls && downloadUrls.raw
        const regular = downloadUrls && downloadUrls.regular
        const small = downloadUrls && downloadUrls.small
        const full = downloadUrls && downloadUrls.full

       const items = [
            {title:'Small (640x960)', url: small,id:0},
            {title:'Medium (1920x2880)',url: regular,id:1},
            {title:'Large (2400x3600)',url: raw,id:2},
            {title:`Original Size (${height}x${width})`,url: full,id:3}
        ]
    
        const renderItems = items.map(item => 
            <CustomLink style={{textAlign:'center'}} to={item.url} key={item.id} title={item.title}> 
                {/* <MenuItem 
                    onClick={handleClose}>
                        <Subtitle text={item.title}/>
                </MenuItem> */}
            </CustomLink>
        )
        return {renderItems}
   
    
        
    
}

export default StaticResources
