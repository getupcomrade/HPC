// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { getProducts } from '../api';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  

//   return (
//     <Row gutter={[16, 16]}>
//       {products.map(product => (
//         <Col key={product.id} xs={10} sm={12} md={8} lg={4}>
//           <Card
//             hoverable
//             style={{ width: '90%', margin: 'auto' }}
//             cover={<img alt={product.name} src={product.image} style={{width:'90%', margin: 'auto'}}/>}
//           >
//             <Meta title={product.name} description={`${product.price} ₸`} />
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

return (
<div>
    <h1>Our Products:</h1>
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

export default ProductList;


