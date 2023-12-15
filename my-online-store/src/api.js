// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getProducts = () =>
  instance.get('/catalog/get-all').catch((error) => {
    console.error('Error fetching products:', error);
  });

export const createUser = (userData) => instance.post('/user/create', userData);

export const getUserByEmail = (email) => instance.get(`/user/get-by-email?email=${email}`);

export const getProductById = (id) => instance.get(`/catalog/get-by-id?id=${id}`);

export const getProductsByCategory = (category) => instance.get(`/catalog/get-by-category?category=${category}`);

export const getRecommendationsByUser = (userId) => instance.get(`/recommendation/get-by-user?userId=${userId}`);

export const getCartProductsByUser = (userId) => instance.get(`/cart-products/get-all?userId=${userId}`);

export const addToCart = (productId, userId) =>  instance.post(`/cart-products/create-cart?id=${productId}&userId=${userId}`);

export const searchProducts = (query) => instance.get(`/catalog/search?name=${query}`);


export const deleteProductFromCart = (id) => instance.delete(`/cart-products/delete-cart?id=${id}`);






