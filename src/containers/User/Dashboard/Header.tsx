import Router from 'next/router';

const Header = ({ user = { name: 'test' } }: any) => {
  const onLogout = () => {
    localStorage.removeItem('user');
    Router.push('/login');
  };

  return (
    <div className='flex w-full flex-col gap-6 bg-black px-5 py-8 md:px-10'>
      <div className='flex w-full justify-between'>
        <h1
          className='text-lg font-bold italic text-white md:text-2xl'
          onClick={() => Router.push('/')}
        >
          KARDANO
        </h1>
        <button
          className='rounded-lg bg-[#242424] px-4 py-1 font-semibold text-white md:py-3 md:px-6 md:text-lg'
          onClick={onLogout}
        >
          Sign Out
        </button>
      </div>
      <div className='flex flex-row gap-3'>
        <div className='grid h-[60px] w-[60px] place-items-center rounded-[50%] bg-white p-4 text-xl font-semibold'>
          {user?.name ? user?.name[0].toUpperCase() : ''}
        </div>
        <div className='flex flex-col gap-1'>
          <h1 className='text-lg font-semibold text-white md:text-3xl'>
            {user?.name}
          </h1>
          <h1 className='text-sm font-normal text-gray-50 md:text-lg'>
            +91 {user?.number}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
