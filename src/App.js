import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/User/Homepage"
import Shop from './Pages/User/Shop';
import Admin from './Pages/Admin/Admin';
import CategoryAdd from './Components/Admin/CategoryAdd';
import Product from './Components/Admin/Product';
import ViewProduct from './Components/Admin/ViewProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Admin/>} />
          <Route path='/admin/category' element={<CategoryAdd/>} />
          <Route path='/admin/product' element={<Product/>} />
          <Route path='/admin/viewproduct' element={<ViewProduct/>} />
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
