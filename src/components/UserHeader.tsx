import Router from 'next/router';

const Header = () => {
  return (
    <div className='border-1 w-full px-4 py-4'>
      <h1
        className='text-2xl font-bold italic'
        onClick={() => {
          Router.push('/');
        }}
      >
        KARDANO
      </h1>
    </div>
  );
};

export default Header;
