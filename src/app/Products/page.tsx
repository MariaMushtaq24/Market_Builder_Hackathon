import React from 'react'
import Head from 'next/head';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import InstagramGrid from '../components/InstagramGrid';
const page = () => {
    return (
      <div>
        <section>
        <Products />
        </section>
        <section className='bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-28 py-8'>
        <Newsletter />
        <InstagramGrid />
        </section>
      </div>
    );
}

export default page;