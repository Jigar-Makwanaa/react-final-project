import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/User/Homepage"
import Shop from './Pages/User/Shop';
import Admin from './Pages/Admin/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Admin/>} />
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
