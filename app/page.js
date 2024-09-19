import React from 'react';
import AboutPage from './about/main';

const HomePage = () => {
  return (
    <div className='w-[90%] mx-auto bg-red-500 my-14'>
        <h2 className='text-center font-bold '>next.js start</h2>
        <AboutPage />
    </div>
  );
};

export default HomePage;