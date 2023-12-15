// src/components/ProfilePage.js
import React from 'react';
import { Typography, Card } from 'antd';

const { Title } = Typography;

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Title style={{textAlign:'center'}}>Profile page</Title>
      {user ? (
        <Card title="User Information" style={{ width: 400 , margin: 'auto'}}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Surname:</strong> {user.surname}</p>
        </Card>
      ) : (
        <p>No user data found. Please log in.</p>
      )}
    </div>
  );
};

export default ProfilePage;
