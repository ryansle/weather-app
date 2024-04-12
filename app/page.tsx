// Components
import NextLink from 'next/link';
import { Search } from '@/components/search';

const Home = () => {
  return (
    <div className='text-center space-y-4 xl:px-96 xl:py-40'>
      <h1 className='text-6xl font-semibold'>
        Basic Capital Weather App
      </h1>
      <h2 className='text-xl font-semibold'>
        Rebuilt in a real dev environment by{' '}
        <NextLink
          href='https://ryanle.dev/'
          className='text-blue-500 cursor-pointer hover:underline'
        >
          Ryan Le
        </NextLink>
      </h2>

      <Search />
    </div>
  );
};

export default Home;