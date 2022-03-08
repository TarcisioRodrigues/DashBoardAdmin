import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/Topbar"

import './global/App.scss'
import { Home } from "./Pages/Home";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import { UserList } from "./Pages/UserList";
export const App=()=> {
  return (
<BrowserRouter>
<TopBar/>
 <div className="Container">
   <SideBar/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/users" element={<UserList/>}/>
   </Routes>
    
   </div>
   </BrowserRouter>

  );
}
