import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound';
import { Carro } from './Carro';
import { Usuario } from './Usuario';
import { Checkout } from './Checkout';
import { Products } from './Products';

export const Navigation = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Carro" element={<Carro/>}/>
        <Route path="/Usuario" element={<Usuario/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Products/:idShop"  element={<Products />}/>
        <Route path="*"  element={<PageNotFound/>}/>
    </Routes>
)