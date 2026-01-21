import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeProducts from "./pages/HomeProducts";
import AllProducts from "./pages/AllProducts";

function App() {

  return (

    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<HomeProducts />} />
          <Route path="/products" element={<AllProducts />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App