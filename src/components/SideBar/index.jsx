import React from "react"
import './styles.scss'
import {LineStyle,Timeline,TrendingUp,PersonOutlineOutlined,Equalizer,Money,Store,Mail,EmojiPeople,Chat,WorkOutline,ErrorOutline} from '@material-ui/icons'
export const SideBar=()=>{
return(
 <div className="sideBar">
  <div className="sideBarWrapper">
    <div className="sideBarMenu">
      <h3 className="sideBarTitle">Dashboard</h3>
      <ul className="sideBarList">
        <li className="sideBarListItem active ">
                <LineStyle className='sideBarIcon'/>
                Home
          </li>
          <li className="sideBarListItem">
                <Timeline className='sideBarIcon'/>
                Analytitcs
          </li>
          <li className="sideBarListItem">
                <TrendingUp className='sideBarIcon'/>
                Sales
          </li>
        </ul>
      </div>
      <div className="sideBarMenu">
      <h3 className="sideBarTitle">Notifications</h3>
      <ul className="sideBarList">
        <li className="sideBarListItem ">
                <Mail className='sideBarIcon'/>
               Mail
          </li>
          <li className="sideBarListItem">
                <EmojiPeople className='sideBarIcon'/>
                FeedBacks
          </li>
          <li className="sideBarListItem">
                <Chat className='sideBarIcon'/>
                  Messages
          </li>
        </ul>
      </div>
      <div className="sideBarMenu">
      <h3 className="sideBarTitle">Quick Menu</h3>
      <ul className="sideBarList">
        <li className="sideBarListItem ">
                <PersonOutlineOutlined className='sideBarIcon'/>
                Users
          </li>
          <li className="sideBarListItem">
                < Store className='sideBarIcon'/>
                Products
          </li>
          <li className="sideBarListItem">
                <Money className='sideBarIcon'/>
                Transanctions
          </li>
          <li className="sideBarListItem">
                <Equalizer className='sideBarIcon'/>
                Reports
          </li>
        </ul>
      </div>
      <div className="sideBarMenu">
      <h3 className="sideBarTitle">Staff</h3>
      <ul className="sideBarList">
        <li className="sideBarListItem ">
                <WorkOutline className='sideBarIcon'/>
                Manage
          </li>
          <li className="sideBarListItem">
                <Timeline className='sideBarIcon'/>
                Analytitcs
          </li>
          <li className="sideBarListItem">
                <ErrorOutline className='sideBarIcon'/>
                Report
          </li>
        </ul>
      </div>
    </div>
   </div>
)
}