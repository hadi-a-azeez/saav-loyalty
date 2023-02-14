import Router from 'next/router';
import { useEffect, useState } from 'react';

import Header from '@/containers/User/Dashboard/Header';
import RewardSection from '@/containers/User/Dashboard/RewardSection';
import ScratchCard from '@/containers/User/Dashboard/ScratchCard';
import { supabase } from '@/lib/supabaseClient';
// import { coupons } from '@/lib/constants';

const DashboardContainer = () => {
  const [user, setUser] = useState({});
  const [coupons, setCoupons] = useState<any>([]);
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
    console.log('userId', userId);
    const { data, error } = await supabase
      .from('kardano-coupons')
      .select('*')
      .eq('user_id', userId);
    console.log('data', data);
    console.log('error', error);
    setCoupons(data || []);
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-gray-200'>
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
      <RewardSection coupons={coupons} fetchData={fetchUserCoupons} />
    </div>
  );
};

export default DashboardContainer;
