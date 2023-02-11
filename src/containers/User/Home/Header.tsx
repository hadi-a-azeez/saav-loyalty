import Router from 'next/router';

interface headerProps {
  title: string;
}

const Header = ({ title }: headerProps) => {
  return (
    <div className='flex w-full flex-row justify-between p-4'>
      <h1 className='text-lg font-bold italic'>{title}</h1>
      <button
        className='border-1 rounded-lg border border-solid border-gray-600 bg-white py-1 px-5 text-sm font-semibold text-black'
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
