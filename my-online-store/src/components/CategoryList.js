// src/components/CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const CategoryList = () => {
  const categories = ['SmartPhone', 'Laptop', 'SmartWatch', 'Dynamic', 'Earphone'];

  return (
    <Menu theme="dark" mode="vertical">
      {categories.map((category) => (
        <Menu.Item key={category}>
          <Link to={`/category/${category}`}>{category}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default CategoryList;
