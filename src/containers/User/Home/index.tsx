import Router from 'next/router';

import Header from '@/containers/User/Home/Header';

const HomeContainer = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Header title='KARDANO' />
      {/* <div className='flex h-[285px] w-[90%] items-center justify-center rounded-lg bg-black'>
        <h1 className='text-3xl font-bold text-white'>KARDANO</h1>
      </div> */}
      <img
        src='https://i.pinimg.com/564x/b7/ba/e3/b7bae3aa7d877dfeeab137e1bd1f1bdb.jpg'
        alt='ss'
        className='flex h-[285px] w-[90%] items-center justify-center rounded-lg object-cover'
      />
      {/* <RegisterSection /> */}
      <div className='px-4 py-5'>
        <div className='flex flex-col justify-center gap-4 rounded-lg bg-gray-900 px-6 py-4'>
          <h1 className='text-center text-2xl font-semibold text-white'>
            Be a member and get Exclusive Offers
          </h1>
          <button
            className='rounded-lg bg-white px-4 py-3 font-bold text-gray-600'
            onClick={() => {
              Router.push('/register');
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
