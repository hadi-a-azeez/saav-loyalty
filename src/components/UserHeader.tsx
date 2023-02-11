import Router from 'next/router';

const Header = () => {
  return (
    <div className='border-1 w-full px-3 py-4'>
      <h1
        className='text-2xl font-bold'
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
