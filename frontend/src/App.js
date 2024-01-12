import axios from "axios";
import UserRegistration from "./UserRegistration";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact";

import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  axios.get('/api/user/').then((data) => console.log(data));
  return (
    <>
      <div className='app'>
        <h1>MapSupport</h1>
        <Navigation />
        <Main />
      </div>
    </>
  );
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact="true" className={(navData) => (navData.isActive ? "current" : 'none')} to='/'>Home</NavLink></li>
      <li><NavLink exact="true" className={(navData) => (navData.isActive ? "current" : 'none')} to='/about'>About</NavLink></li>
      <li><NavLink exact="true" className={(navData) => (navData.isActive ? "current" : 'none')} to='/contact'>Contact</NavLink></li>
      <li><NavLink exact="true" className={(navData) => (navData.isActive ? "current" : 'none')} to='/register'>UserRegistration</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Routes>
    <Route exact="true" path='/' element={<Home/>}></Route>
    <Route exact="true" path='/about' element={<About/>}></Route>
    <Route exact="true" path='/contact' element={<Contact/>}></Route>
    <Route exact="true" path='/register' element={<UserRegistration/>}></Route>
  </Routes>
);




export default App;


