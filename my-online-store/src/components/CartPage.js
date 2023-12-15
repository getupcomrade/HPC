// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getCartProductsByUser, deleteProductFromCart } from '../api';

const { Meta } = Card;

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await getCartProductsByUser(user.id);
        setProducts(response.data);

        const total = response.data.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchCartProducts();
  }, [user.id]); 

  const handleDeleteFromCart = async (productId) => {
    try {
      await deleteProductFromCart(productId);
      const response = await getCartProductsByUser(user.id);
      setProducts(response.data);

      const total = response.data.reduce((acc, product) => acc + product.price, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error('Error deleting product from cart:', error);
    }
  };

  return (
    <div>
      <h1>My Cart:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '10px' }}>
            <Card
              hoverable
              style={{ width: 200, margin: 'auto' }}
              cover={<img alt={product.name} src={product.image} style={{ width: '90%', margin: 'auto' }} />}
            >
              <Meta title={product.name} description={`Price: ${product.price} tg`} />
              <Button style={{margin:'15px'}} danger onClick={() => handleDeleteFromCart(product.id)}>
                Remove from Cart
              </Button>
            </Card>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Total Price: {totalPrice} tg</h2>
      </div>
    </div>
  );
};

export default CartPage;
