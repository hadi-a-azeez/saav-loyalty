import GoogleReviewSection from '@/containers/User/Home/GoogleReview';
import Header from '@/containers/User/Home/Header';
import RegisterSection from '@/containers/User/Home/RegisterSection';

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
      <div className='flex flex-col gap-4 px-4 py-5'>
        <RegisterSection />
        {/* <GoogleReviewSection /> */}
      </div>
    </div>
  );
};

export default HomeContainer;
