import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-green-600 to-transparent text-white font-semibold flex items-center justify-between px-8 py-2'>
      <h1 className='text-white font-mono font-bold'>MERN-USER</h1>
      <ul className='flex gap-5'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-post">AllPost</Link></li>
        <li><Link to="/new-post">NewUser</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar