import {
  Routes, Route
} from "react-router-dom";
import './App.css';
import Layout from "./layout/Layout";
import Home from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
    </Layout>

  );
}

export default App;
