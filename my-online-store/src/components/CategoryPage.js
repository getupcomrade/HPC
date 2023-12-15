// ProductListByCategory.js
import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '../api'; // Update the path accordingly
import { Link, useParams } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const CategoryPage = () => {
    const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products by category:', error);
      });
  }, [category]);
  return (
    <div>
      <h2>{category} Products</h2>
      {/* {products.map((product) => (
        <Card
          key={product.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={product.name} src={product.image} />}
        >
          <Meta title={product.name} description={`Price: $${product.price / 100}`} />
          <p>{product.description}</p>
        </Card>
      ))} */}
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

//   return (
    
//     <div style={{ display: 'flex', flexWrap: 'wrap' ,  margin: 'auto' }}>
//       {products.map((product) => (
//         <Link to={`/product/${product.id}`} key={product.id} style={{ margin: '10px' }}>
//           <Card
//             hoverable
//             style={{ width: 200, margin: 'auto' }}
//             cover={<img alt={product.name} src={product.image} style={{width:'90%', margin: 'auto'}} />}
//           >
//             <Meta title={product.name} description={`Price: ${product.price} tg`} />
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );

//   return (
//     <div>
//       <h2>{category} Products</h2>
//       {/* Display products here */}
//       {products.map((product) => (
//         // Render product information as needed
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           {/* Add more product information as needed */}
//         </div>
//       ))}
//     </div>
//   );
};



export default CategoryPage;
