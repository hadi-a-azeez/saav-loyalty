import { useEffect, useState } from 'react';

import ReviewModal from '@/containers/User/Home/GoogleReview/ReviewModal';
import { supabase } from '@/lib/supabaseClient';

const GoogleReviewSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserReviewed, setIsUserReviewed] = useState(false);
  const [coupon, setCoupon] = useState('');
  //useEffect is not running on the first render, showing error Uncaught (in promise) DOMException: Document is not focused.
  useEffect(() => {
    console.log('useEffect');
    const fetch = async () => {
      const user = localStorage.getItem('user');
      if (user) {
        const userObj = JSON.parse(user);
        const userId = userObj[0].id;
        const { data, error } = await supabase
          .from('kardano-reviews')
          .select()
          .eq('user_id', userId);
        if (data && data.length > 0) {
          console.log('data', data);
          setIsUserReviewed(true);
          setCoupon(data[1].coupon);
        }
      }
    };
    fetch();
  }, [isOpen]);

  return (
    <div className='border-1 rounded-lg border border-gray-700 px-4 py-4'>
      <h1 className='text-2xl font-semibold text-black'>
        {isUserReviewed
          ? `Your Coupon Code is ${coupon}`
          : 'Write a Review on Google to get a Coupon Code'}
      </h1>
      {isUserReviewed ? (
        <button className='mt-4 w-fit self-center rounded-lg bg-black py-2 px-6 text-lg font-semibold text-white'>
          Claim your Coupon Code
        </button>
      ) : (
        <button
          className='mt-4 w-fit self-center rounded-lg bg-black py-2 px-6 text-lg font-semibold text-white'
          onClick={() => setIsOpen(true)}
        >
          Write a Review on Google
        </button>
      )}
      <ReviewModal isOpen={isOpen} onCloseAction={() => setIsOpen(false)} />
    </div>
  );
};

export default GoogleReviewSection;
