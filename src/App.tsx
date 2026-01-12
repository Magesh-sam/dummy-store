import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeProducts from "./pages/HomeProducts";

function App() {

  return (

    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<HomeProducts />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App