// src/components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { Card, Spin,Button, message } from 'antd';
import { addToCart, getProductById } from '../api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      // Получение данных пользователя из localStorage
      const user = JSON.parse(localStorage.getItem('user'));

      // Проверка, есть ли пользователь в localStorage
      if (!user) {
        message.warning('Please log in to add items to the cart.');
        return;
      }

      // Выполнение запроса к API для добавления товара в корзину
      await addToCart(id, user.id);

      message.success('Item added to the cart successfully!');
    } catch (error) {
      console.error('Error adding item to the cart:', error);
      message.error('Failed to add item to the cart. Please try again.');
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }


  return (
    <div>
        
      {product ? (
        <>
        <Button onClick={() => history(-1)} style={{ marginBottom: '16px' }}>
            Back
          </Button>
          <Card
            title={product.name}
            cover={<img alt={product.name} src={product.image} style={{ width: '500px' }} />}
          >
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <Button type="primary" onClick={handleAddToCart} style={{ marginTop: '10px' }}>
          Add to Cart
        </Button>
          </Card>
          
        </>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

export default ProductDetails;
