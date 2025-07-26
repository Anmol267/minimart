import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import CartPage from "./pages/CartPage"
import Fashion from "./pages/Fashion"
import Furniture from "./pages/Furniture"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/product" element={<Product/>}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path = "/cart" element={<CartPage/>}></Route>
      <Route path="/fashion" element={<Fashion/>}></Route>
      <Route path="/furniture" element={<Furniture/>}></Route>
    </Routes>
    <Footer />
    </>
  )
} 

export default App
