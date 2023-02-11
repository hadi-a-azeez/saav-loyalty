import Router from 'next/router';
import { useEffect, useState } from 'react';

import Header from '@/containers/User/Dashboard/Header';
import RewardSection from '@/containers/User/Dashboard/RewardSection';

const DashboardContainer = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      Router.push('/login');
    } else {
      // const parsedUser = JSON.parse(user);
      // if (Array.isArray(parsedUser)) {
      //   setUser(parsedUser[0] || {});
      // } else {
      //   setUser({});
      // }
      setUser({ name: 'test name', number: '989898989' });
    }
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <Header user={user} />
      {/* <MetricsSection /> */}
      {/* <ScratchCardSection /> */}
      <RewardSection />
    </div>
  );
};

export default DashboardContainer;
