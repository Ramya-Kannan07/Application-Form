
import React, { useState, useEffect } from 'react';
import '../styles/UserForm.css';

const UserForm = ({ addUser, editUserData, updateUser, clearEdit }) => {
  // Form state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    photo: null
  });

  // Effect to load user data into the form if editing
  useEffect(() => {
    if (editUserData) {
      setFormData({
        username: editUserData.username,
        email: editUserData.email,
        dob: editUserData.dob,
        photo: editUserData.photo
      });
    } else {
      setFormData({
        username: '',
        email: '',
        dob: '',
        photo: null
      });
    }
  }, [editUserData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUserData) {
      // Update user
      updateUser({ ...formData, id: editUserData.id });
      clearEdit();
    } else {
      // Add new user
      const newUser = {
        ...formData,
        id: Date.now() // Assign a unique ID for new user
      };
      addUser(newUser); // Use addUser function passed as prop
    }

    // Clear the form
    setFormData({ username: '', email: '', dob: '', photo: null });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="photo"
        onChange={handleChange}
        required={!editUserData} // File upload is required only for adding a new user
      />
      <button type="submit">{editUserData ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
