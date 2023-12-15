// src/components/Header.js
// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import './styles/Header.css';

// const { Header } = Layout;

// const AppHeader = () => {
//   return (
//     <Header>
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
//         <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
//         <Menu.Item key="login"><Link to="/login">Login</Link></Menu.Item>
//         <Menu.Item key="register"><Link to="/register">Register</Link></Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

// export default AppHeader;

// src/components/Header.js
// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button,Dropdown ,Input} from 'antd';
import { DownOutlined,SearchOutlined } from '@ant-design/icons';


const { Header: AntdHeader } = Layout;
const { Search } = Input;
const categories = ['SmartPhone', 'Laptop', 'SmartWatch', 'Dynamic', 'Earphone'];

const Header = () => {
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    history('/');
    window.location.reload();
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const handleCategoryClick = (category) => {
    history(`/category/${category}`);
  };

  const categoryMenu = (
    <Menu>
      {categories.map((category) => (
        <Menu.Item key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </Menu.Item>
      ))}
    </Menu>
  );

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      history(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };
  
  return (
    <AntdHeader style={{ 
        // position: 'fixed',
         zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2">
          <Dropdown overlay={categoryMenu}>
            <span>
              Categories <DownOutlined />
            </span>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="3">
        <Search
        placeholder="Search products..."
        allowClear
        enterButton={<SearchOutlined />}
        size="medium"
        onChange={(e) => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
        style={{ width: '300px', marginLeft: 'auto' ,marginTop:'15px'}}
      />
            </Menu.Item>
        {!user ? (
          <>
            <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/register">Register</Link></Menu.Item>
            
          </>
        ) : (
          <>
            <Menu.Item key="6"><Link to="/profilePage">Hello, {user.username}</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/myCartPage/:id">My Cart</Link></Menu.Item>
            <Menu.Item key="8">
              <Button type="link" onClick={handleLogout}>Logout</Button>
            </Menu.Item>
          </>
        )}
      </Menu>
      
    </AntdHeader>
  );
};

export default Header;
