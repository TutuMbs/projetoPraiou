import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Login from "./pages/login";


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/sobre" element={<Sobre/>}/>
        <Route path = "/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
