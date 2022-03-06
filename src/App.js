import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/Topbar"

import './global/App.scss'
import { Home } from "./Pages/Home";
export const App=()=> {
  return (
<>
<TopBar/>
 <div className="Container">
   <SideBar/>
    <Home/>
  
   </div>
</>

  );
}

export default App;
