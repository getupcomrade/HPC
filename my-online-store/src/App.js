// src/App.js
import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import ProductList from './components/ProductList';
import Login from './components/Login'; 
import Register from './components/Register';
import ProductDetails from './components/ProductDetails';

import './App.css';
import CategoryPage from './components/CategoryPage';
import ProfilePage from './components/ProfilePage';
import RecommendationList from './components/RecommendationList';
import CartPage from './components/CartPage';
import SearchResults from './components/SearchResults';

const { Content } = Layout;

const CombinedLists = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    
    <div>
    {!user ? (
        <ProductList />
      ) : (
        <>
      <ProductList />
      <br/><br/><br/>
      <RecommendationList />
    </>
      )}
      </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AppHeader />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380, margin:'auto' }}>
          <Routes>
            <Route exact path="/"  element={<CombinedLists/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/profilePage" element={<ProfilePage/>} />
            <Route exact path="/product/:id" element={<ProductDetails/>} />
            <Route exact path="/category/:category" element={<CategoryPage/>} />
            <Route exact path="/" element={<RecommendationList/>} />
            <Route exact path='/myCartPage/:id' element={<CartPage/>}/>
            <Route exact path='/search' element={<SearchResults/>}/>
          </Routes>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;
