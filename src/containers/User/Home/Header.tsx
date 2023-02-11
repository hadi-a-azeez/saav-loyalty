import Router from 'next/router';

interface headerProps {
  title: string;
}

const Header = ({ title }: headerProps) => {
  return (
    <div className='flex w-full flex-row justify-between p-4'>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <button
        className='rounded-lg bg-black py-2 px-5 text-sm font-semibold text-white'
        onClick={() => {
          Router.push('/login');
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
