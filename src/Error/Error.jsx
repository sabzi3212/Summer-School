import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/kQyb3FD/mulyadi-Zn-Lpr-In-KM7s-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Page Not Found</h1>
    </div>
    <Link to='/'><button className='btn btn-accent'>Back to Home</button></Link>
  </div>
</div>
    );
};

export default Error;