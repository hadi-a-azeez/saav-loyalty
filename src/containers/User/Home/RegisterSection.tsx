import Router from 'next/router';

const RegisterSection = () => {
  return (
    <div className='flex w-full flex-col justify-center gap-4 rounded-lg bg-gray-900 px-6 py-4 md:py-12 md:px-20'>
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
  );
};

export default RegisterSection;
