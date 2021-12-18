import {
  Routes, Route
} from "react-router-dom";
import './App.css';
import CartProvider from "./context/provider/CartProvider";
import Layout from "./layout/Layout";
import CartPage from "./pages/CartPage";
import Home from "./pages/HomePage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutPage from "./pages/CheckoutPages";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <CartProvider>
      <Layout>
       <ToastContainer/>
      <Routes>
        <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup'element={<SignupPage/>}/>
      </Routes>
      </Layout>
    </CartProvider>

  );
}

export default App;
