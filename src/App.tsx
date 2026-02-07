import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeProducts from "./pages/HomeProducts";
import AllProducts from "./pages/AllProducts";
import ProductsByCategory from "./pages/ProductsByCategory";
import YourCart from "./pages/YourCart";

function App() {

  return (

    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<HomeProducts />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:slug" element={<ProductsByCategory/>} />
          <Route path="/your-cart" element={<YourCart/>} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App