import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className='grid grid-rows-layout bg-yellow-200 w-full h-screen'>
      <Navbar />
      <main className='px-8 py-2'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root