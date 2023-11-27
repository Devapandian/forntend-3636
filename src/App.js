import React from "react";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Products from "./components/Products";
import { AuthContextProvider } from "./context/AuthContext";
import Pricing from "./components/pricing";
import Blog from "./components/Blog";
import Login from "./components/login";
import Shop from "./components/shop";
import Offer from "./components/offer";
import Signup from "./components/signup/signup"

function App() {
  return (
  <div>

  <BrowserRouter>
  <AuthContextProvider>
    <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='*' element={<Navigate to = '/signIn'/>}/>
      <Route path="/Products" element={<Products />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/signup" element={<Signup />} />





    </Routes>
    </AuthContextProvider>
  </BrowserRouter>
</div>
  );
}

export default App;
