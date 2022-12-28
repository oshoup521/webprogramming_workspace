import { Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import "./styles/App.css"
import "./styles/Header.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          
          <Route path="*" element={<div>page not found 404</div>}></Route>
      </Routes>
      
    </Router>
  );
}
export default App;