import Header from '@/containers/User/Home/Header';
import LinkSection from '@/containers/User/Home/Links';
import RegisterSection from '@/containers/User/Home/RegisterSection';

const HomeContainer = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Header title='KARDANO' />
      <div className='flex w-full flex-col gap-4 px-8 py-5 md:px-20'>
        <div
          className='flex h-[285px] w-full items-center justify-center rounded-lg object-cover md:h-[350px]'
          style={{
            backgroundImage: `url('https://i.pinimg.com/564x/b7/ba/e3/b7bae3aa7d877dfeeab137e1bd1f1bdb.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img src='/kardanologo.png' alt='Kardano Logo' className='w-1/2' />
        </div>
        {/* <RegisterSection /> */}
        <RegisterSection />
        {/* <GoogleReviewSection /> */}
        <LinkSection />
      </div>
    </div>
  );
};

export default HomeContainer;
