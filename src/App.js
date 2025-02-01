import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Notfound from './components/NotFound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/manage" element={<h1>This is manage</h1>} />
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
    </Router>
  );
}

export default App;
