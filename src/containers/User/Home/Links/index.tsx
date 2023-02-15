import Link from '@/containers/User/Home/Links/link';

const LinkSection = () => {
  return (
    <div className='flex w-full flex-col gap-4'>
      <Link
        title='Visit our instagram profile'
        icon={
          <img
            src='https://img.icons8.com/ios/50/null/instagram-new--v1.png'
            alt='Instagram'
            className='h-6 w-6'
          />
        }
        onClick={() => {
          window.open('https://www.instagram.com/kardano.in/', '_blank');
        }}
      />
      <Link
        title='Call us for enquiry'
        icon={
          <img
            src='https://img.icons8.com/fluency-systems-regular/48/null/phone.png'
            alt='Phone'
            className='h-6 w-6'
          />
        }
        onClick={() => {
          window.open('tel:+919747533002', '_blank');
        }}
      />
    </div>
  );
};

export default LinkSection;
