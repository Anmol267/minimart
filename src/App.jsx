import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/product" element={<Product/>}/>
      <Route path = "/contact" element={<Contact/>}/>
    </Routes>
    <Footer />
    </>
  )
} 

export default App
