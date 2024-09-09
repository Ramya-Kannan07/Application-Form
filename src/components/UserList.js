// src/components/UserList.js
import React from 'react';
import '../styles/UserList.css';

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div className="user-list">
      {users.length === 0 ? <p>No users available.</p> : 
        users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={URL.createObjectURL(user.photo)} alt="User" />
            <div className="user-details">
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>
              <p>DOB: {user.dob}</p>
            </div>
            <div className="user-actions">
              <button onClick={() => editUser(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default UserList;
