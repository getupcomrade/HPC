// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { getProducts, getRecommendationsByUser } from '../api';
import { Link } from 'react-router-dom';
import Title from 'antd/es/skeleton/Title';

const { Meta } = Card;

const RecommendationList = () => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getRecommendationsByUser(user.id)
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  


return (
<div>
    <h1>Recommendations:</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' ,  margin: 'auto' }}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ margin: '10px' }}>
            <Card
              hoverable
              style={{ width: 200, margin: 'auto' }}
              cover={<img alt={product.name} src={product.image} style={{width:'90%', margin: 'auto'}} />}
            >
              <Meta title={product.name} description={`Price: ${product.price} tg`} />
            </Card>
          </Link>
        ))}
      </div>
      </div>
  );
};

export default RecommendationList;


