import { BrowserRouter, Routes, Route } from "react-router-dom"
// import {Home, Work, About, Shop, Contact,NotFound} from "./pages"
import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* this is the default path to the home */}
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/work" element={<Work/>} />
                <Route path="/shop" element=""/>
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
