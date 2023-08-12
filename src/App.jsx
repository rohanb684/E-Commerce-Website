import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import Notfound from './Pages/NotFound/NotFound'
import { useCart } from './Context/Cart'


function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
