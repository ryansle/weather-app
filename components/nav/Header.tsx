// Components
import { IoDocument as Resume } from 'react-icons/io5';
import { MdWork as Work } from 'react-icons/md';
import { RiGitRepositoryCommitsFill as View } from 'react-icons/ri';
import { FaGithub as GitHub } from 'react-icons/fa';
import NextLink from 'next/link';
import { HeaderLinks } from '@/components/nav';

const Header = () => {
  const routes = [
    { text: 'Portfolio', href: 'https://ryanle.dev/', icon: <Work /> },
    { text: 'Resume', href: 'https://ryanle.dev/resume.pdf', icon: <Resume /> },
    { text: 'GitHub', href: 'https://github.com/ryansle', icon: <GitHub /> },
    { text: 'View this Repository', href: 'https://github.com/ryansle/weather-app', icon: <View /> },
  ];

  return (
    <header className='flex justify-between items-center py-5 px-6 border-b border-gray-700 bg-black sticky relative z-50 top-0 right-0 left-0 z-10 xs:px-20 lg:px-48 2xl:px-72 3xl:px-[400px] 4xl:px-[500px]'>
      <NextLink href='/' className='flex justify-center items-center'>
        <h4 className='tracking-wider font-medium text-xl'>RYAN S. LE</h4>
      </NextLink>

      <HeaderLinks routes={routes} />
    </header>
  );
};

export { Header };