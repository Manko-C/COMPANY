import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooldal from './components/Fooldal'
import AboutUs from './components/Rolunk'
import TermekekLista from './components/Termekek'
import Akciok from './components/Akciok'

function App() {
 return(
  <Router>
    <nav>
      <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Főoldal</a>
  </li>
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/products">Termékek</a>
  </li>
      <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/sale">Akciók</a>
  </li>
</ul>
  <Routes >
    <Route path='/' element={<Fooldal/>}/>   
    <Route path='/about' element={<AboutUs/>}/> 
    <Route path='/products' element={<TermekekLista/>}/>
    <Route path='/sale' element={<Akciok/>}/>
  </Routes>
  </nav>
  </Router>
 )
}

export default App
