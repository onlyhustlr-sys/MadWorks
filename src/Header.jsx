import "./Header.css"
import About from "./About.jsx"
import Home from "./Home.jsx"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
function Header(){
  
  return(
    <>
      <BrowserRouter>
      <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      </nav>
      <Routes className="rt">
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default Header