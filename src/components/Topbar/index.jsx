import React from 'react'
import './styles.scss'
import Image from '../../assets/avatar.jpeg'
import {NotificationsNone ,Settings, Language}from '@material-ui/icons';
export const TopBar=()=>{
return(
  <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <div className="logo">admin</div>
        </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <NotificationsNone/>
          <span className='topbarIconBag'>2</span>
          </div>
          <div className="topbarIconContainer">
          <Language/>
          <span className='topbarIconBag'>2</span>
          </div>
          <div className="topbarIconContainer">
          <Settings/>
          </div>
              <img src={Image} alt="avatar" className="topAvatar" />
        </div>
      </div>
    
    </div>
)
}