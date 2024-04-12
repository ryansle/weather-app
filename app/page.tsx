'use client';

import { useState } from 'react';

// Components
import NextLink from 'next/link';
import { Search } from '@/components/search';

// Types
import type { Location } from '@/lib/types';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>();

  return (
    <div className='text-center px-8 py-10 space-y-4 xl:px-96 xl:py-40'>
      <h1 className='text-4xl xl:text-6xl font-semibold'>
        Basic Capital Weather App
      </h1>
      <h2 className='text-xl font-semibold'>
        Rebuilt in a real dev environment by{' '}
        <NextLink
          href='https://ryanle.dev/'
          className='text-blue-500 cursor-pointer hover:underline'
        >
          Ryan Le
        </NextLink>.
      </h2>

      <Search
        selectedLocation={selectedLocation as Location}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  );
};

export default Home;