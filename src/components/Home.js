import React from 'react'; // Import only React from 'react'
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Application Management App</h1>
      <Link to='/users'><button>See Users</button></Link>
    </div>
  );
};

export default Home;
