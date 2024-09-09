// src/components/Users.js
import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import '../styles/User.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editUserData, setEditUserData] = useState(null);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Function to update an existing user
  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Function to set user data for editing
  const editUser = (user) => {
    setEditUserData(user);
  };

  // Function to clear the edit state
  const clearEdit = () => {
    setEditUserData(null);
  };

  return (
    <div className="users-container">
      <h2>User Management</h2>
      {/* Pass addUser, editUserData, updateUser, and clearEdit as props */}
      <UserForm 
        addUser={addUser} 
        editUserData={editUserData} 
        updateUser={updateUser} 
        clearEdit={clearEdit} 
      />
      <UserList 
        users={users} 
        deleteUser={deleteUser} 
        editUser={editUser} 
      />
    </div>
  );
};

export default Users;
