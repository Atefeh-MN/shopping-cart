import { Route,Switch} from "react-router-dom";
import './App.css';
import CartProvider from "./context/provider/CartProvider";
import Layout from "./layout/Layout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from "./pages/CheckoutPages";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthProvider from "./context/provider/AuthProvider";
import Profilepage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <Layout>
       <ToastContainer/>
    {/* <Routes>
        <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/profile' element={<Profilepage />} />
            <Route path='/checkout' element={<CheckOutPage />} />
      </Routes>  */}
          <Switch>
            <Route path="/cart" component={CartPage} />
            
            <Route path='/profile' component={Profilepage} />

            <Route path="/checkout" component={CheckoutPage} />

            <Route path="/login" component={LoginPage} />

            <Route path="/signup" component={SignupPage} />

            <Route path="/" component={HomePage} />
          </Switch>
      </Layout>
    </CartProvider>
    </AuthProvider >

  );
}

export default App;
