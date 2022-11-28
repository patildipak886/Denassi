import React from 'react';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
const Home = (props) => {
  return (
    <div className="login">
      <Header/>
      <button className='btn btn-primary '>Login</button>
    </div>
  );
};
export default Home;