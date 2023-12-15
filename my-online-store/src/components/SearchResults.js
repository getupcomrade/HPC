// src/components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List, Card, Typography } from 'antd';
import { getProducts, searchProducts } from '../api';

const { Title } = Typography;

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('name');
  const [allProducts, setAllProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        console.log('All Products:', response.data);
        setAllProducts(response.data);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setResults(searchProducts(allProducts, query));
  }, [allProducts, query]);

  if (!query) {
    return <p>No search query provided.</p>;
  }

  return (
    <div>
      <Title>Search Results for "{query}"</Title>
      {Array.isArray(results) && results.length > 0 ? (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={results}
          renderItem={(product) => (
            <List.Item>
              <Card
                title={product.name}
                hoverable
                style={{ width: 240 }}
                cover={<img alt={product.name} src={product.image} />}
              >
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
