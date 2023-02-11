import Router from 'next/router';

const RegisterSection = () => {
  return (
    <div className='mt-4 flex w-full flex-col items-center gap-4 px-5 py-2'>
      <h1 className='align-middle text-lg font-semibold'>
        Be a member and get exclusive offers
      </h1>
      <button
        className='w-fit rounded-lg bg-black py-2 px-6 text-lg font-semibold text-white'
        onClick={() => {
          Router.push('/register');
        }}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterSection;
