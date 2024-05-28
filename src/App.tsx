import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componets/home/Home';
import Pos from './componets/pos/Pos';
import Stock from './componets/stock/Stock';
import Supplier from './componets/supplier/Supplier';
import Profile from './componets/profile/Profile';
import User from './componets/user/User';
import Login from './componets/user/Login';
import AddUser from './componets/user/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pos' element={<Pos />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/supplier' element={<Supplier />} />
        {/*<Route path='/user' element={<User />} />*/}
        <Route path='/user/user' element={<AddUser />} />
        <Route path='/user' element={<User />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;
