import Header from '@/containers/User/Home/Header';
import RegisterSection from '@/containers/User/Home/RegisterSection';

const HomeContainer = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Header title='Kardano' />
      <div className='flex h-[285px] w-[90%] items-center justify-center rounded-lg bg-black'>
        <h1 className='text-3xl font-bold text-white'>KARDANO</h1>
      </div>
      <RegisterSection />
    </div>
  );
};

export default HomeContainer;
