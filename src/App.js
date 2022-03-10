import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/Topbar"

import './global/App.scss'
import { Home } from "./Pages/Home";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { UserList } from "./Pages/UserList";
import { User } from "./Pages/User";
import { NewUser } from "./Pages/NewUser";
import { ProductList } from "./Pages/ProductList";
import { Product } from "./Pages/Product";
export const App=()=> {
  return (
<BrowserRouter>
<TopBar/>
 <div className="Container">
   <SideBar/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route  path="/users" element={<UserList/>}/>
    <Route path="/users/:userId" element={<User/>}/>
    <Route path="/newUser" element={<NewUser/>}/>
    {/* Rotas de produtos */}
    <Route  path="/products" element={<ProductList/>}/>
    <Route  path="/products/:productsId" element={<Product/>}/>
    <Route path="/newProduct" element={<NewUser/>}/>

   </Routes>
    
   </div>
   </BrowserRouter>

  );
}
