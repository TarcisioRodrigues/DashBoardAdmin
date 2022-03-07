import './styles.scss'
import Image from '../../assets/avatar.jpeg'
import {Visibility}from '@material-ui/icons';

export const WidgetSm=()=>{
  return(
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={Image} alt="widget" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tarcisio Rodrigues</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
          </li>
          <li className="widgetSmListItem">
          <img src={Image} alt="widget" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tarcisio Rodrigues</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
          </li>
          <li className="widgetSmListItem">
          <img src={Image} alt="widget" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tarcisio Rodrigues</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><Visibility className='widgetSmIcon'/> Display</button>
          </li>
        </ul>
      </div>
      
  )
}