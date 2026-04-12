import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contect from './Pages/Contact';
import Header from './Pages/Header';
import Menu from './Pages/Menu';
import Footer from './Pages/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'

function Layout() {
  const location = useLocation();

  // hide header & footer on login AND register
  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contect' element={<Contect/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;