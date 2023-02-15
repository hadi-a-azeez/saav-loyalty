import Router from 'next/router';
import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabaseClient';

import Header from '@/containers/User/Dashboard/Header';
import RewardSection from '@/containers/User/Dashboard/RewardSection';
// import { coupons } from '@/lib/constants';

const DashboardContainer = () => {
  const [user, setUser] = useState<any>({});
  const [coupons, setCoupons] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      Router.push('/login');
    } else {
      const parsedUser = JSON.parse(user);
      setUser((parsedUser && parsedUser[0]) || {});
      fetchUserCoupons(parsedUser[0].id);
    }
  }, []);

  const fetchUserCoupons = async (userId: string) => {
    console.log('fetching coupons for user: ', userId);
    setIsLoading(true);
    const { data, error } = await supabase
      .from('kardano-coupons')
      .select('*')
      .eq('user_id', userId);
    setCoupons(data || []);
    setIsLoading(false);
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-gray-100'>
      <Header user={user} />
      {/* <MetricsSection /> */}
      {/* <ScratchCardSection /> */}
      {/* <ScratchCard
        imageForwardSrc='https://uploads.codesandbox.io/uploads/user/a5aec563-412a-454f-a80f-dc430ffbf7c5/xgu0-scratch-card.jpg'
        imageBackgroundSrc='https://uploads.codesandbox.io/uploads/user/a5aec563-412a-454f-a80f-dc430ffbf7c5/4Li9-result.jpg'
        width={300}
        height={300}
        percentToFinish={50}
        onScratchFinish={() => {
          console.log('Scratch finished');
        }}
      /> */}
      {/* shimmer  */}
      {isLoading ? (
        // skeleton
        <div className='mt-4 w-full px-3 md:mt-10 md:px-16'>
          <h1 className='text-xl font-semibold md:text-3xl'>My Rewards</h1>
          <div className='mt-3 grid w-full grid-cols-2 gap-3'>
            <div className='flex min-h-[150px] w-[100%] animate-pulse flex-col gap-2  rounded-lg bg-gray-300 px-3 py-5' />
            <div className='flex flex min-h-[150px] w-[100%] animate-pulse flex-col gap-2  rounded-lg bg-gray-300 px-3 py-5' />
          </div>
        </div>
      ) : (
        <RewardSection
          coupons={coupons}
          fetchData={fetchUserCoupons}
          userId={user?.id}
        />
      )}
    </div>
  );
};

export default DashboardContainer;
