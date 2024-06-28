import React from 'react';
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import SearchIcon from '@mui/icons-material/Search'; 
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';  



function Header () {
    return <div className="header">
     <div className="headerLeft">
      <AccountCircleIcon
            className="headerAvatar"
            /> 
            
         {/*avatars for logged in user */}
        <AccessTimeIcon/> 
         {/*time icon */ }
     </div>
     <div className="headerSearch">
        <SearchIcon/> 
         {/* search icon  */}
        <input placeholder="move if ur gay"/>
         {/* input  */}
     </div>
     <div className="headerRight">
        <HelpOutlineOutlinedIcon/> 
        {/* help icon  */}
     </div>

      </div>
    
}

export default Header