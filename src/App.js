import {
  Routes, Route
} from "react-router-dom";
import './App.css';
import CartProvider from "./context/provider/CartProvider";
import Layout from "./layout/Layout";
import CartPage from "./pages/CartPage";
import Home from "./pages/HomePage";

function App() {
  return (
    <CartProvider>
    <Layout>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      </Layout>
    </CartProvider>

  );
}

export default App;
