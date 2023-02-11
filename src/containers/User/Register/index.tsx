import Router from 'next/router';

import Header from '@/components/UserHeader';
import Form from '@/containers/User/Register/Form';

const RegisterContainer = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Header />
      <img
        src='https://i.pinimg.com/564x/b7/ba/e3/b7bae3aa7d877dfeeab137e1bd1f1bdb.jpg'
        alt='ss'
        className='h-[270px] w-full object-cover'
      />
      <h1 className='mt-4 py-4 text-center text-3xl font-semibold'>
        Exclusive Rewards For Members
      </h1>
      <Form />
      <h1 className='mt-2 mb-6 self-start px-4 text-lg text-gray-600'>
        Already a member?{' '}
        <span
          className='cursor-pointer text-blue-600'
          onClick={() => {
            Router.push('/login');
          }}
        >
          Login
        </span>
      </h1>
    </div>
  );
};

export default RegisterContainer;
