import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import { supabase } from '@/lib/supabaseClient';

interface BoxProps {
  coupon: string;
  coupon_description: string;
  id: any;
  status: string;
}

const RewardSection = ({ coupons = [], fetchData, userId = '' }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState({
    heading: '',
    value: '',
    status: '',
  });
  const [confetti, setConfetti] = useState(false);
  //get the screen width and height after window load
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const updateStatus = async (id: any, status: string) => {
    if (status === 'USED') return;
    const { data, error } = await supabase
      .from('kardano-coupons')
      .update({ status: 'USED' })
      .eq('id', id);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const RewardModal = () => {
    return (
      <Drawer
        isOpen={isOpen}
        onClose={() => {
          setConfetti(false);
          setIsOpen(false);
          selectedReward?.status === 'ACTIVE' && fetchData(userId);
        }}
        //align content to the center of the screen
        placement='bottom'
      >
        <DrawerOverlay />
        <DrawerContent
          style={{
            borderRadius: '20px 20px 0 0',
          }}
        >
          <DrawerCloseButton />
          <DrawerBody>
            <div className='flex h-[300px] w-[100%] flex-col items-center gap-2 px-3 py-5'>
              <h1 className='text-3xl font-bold text-gray-900'>
                {selectedReward?.heading}
              </h1>
              <h1 className='text-lg font-normal text-gray-900 '>
                {selectedReward?.value}
              </h1>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };

  const Box = ({
    coupon = '',
    coupon_description = '',
    id = '',
    status = '',
  }: BoxProps) => {
    return (
      <>
        {status === 'USED' ? (
          <div
            className='border-1 flex min-h-[150px] w-[100%] flex-col gap-2  rounded-lg bg-white px-3 py-5 md:min-h-[200px] md:px-6 md:py-10'
            style={{
              //set backgroundimage src "/offer.png"
              backgroundImage: `url('/kard.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => {
              setSelectedReward({
                heading: coupon,
                value: coupon_description,
                status: status,
              });
              //confetti
              setConfetti(true);
              setIsOpen(true);
              updateStatus(id, status);
            }}
          >
            <h1 className='text-xl font-bold text-gray-900 md:text-3xl'>
              {coupon}
            </h1>
            <h1 className='text-lg font-normal text-gray-900 md:text-xl'>
              {coupon_description}
            </h1>
          </div>
        ) : (
          <div
            className='flex min-h-[150px] w-[100%] flex-col gap-2  rounded-lg bg-blue-700 px-3 py-5 md:min-h-[200px] md:px-6 md:py-10'
            style={{
              //set backgroundimage src "/offer.png"
              backgroundImage: `url('/offer.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => {
              setSelectedReward({
                heading: coupon,
                value: coupon_description,
                status: status,
              });
              //confetti
              setConfetti(true);
              setIsOpen(true);
              updateStatus(id, status);
            }}
          ></div>
        )}
      </>
    );
  };

  return (
    <div className='mt-4 w-full px-3 md:mt-10 md:px-16'>
      <h1 className='text-xl font-semibold md:text-3xl'>My Rewards</h1>
      <div className='mt-3 grid w-full grid-cols-2 gap-3'>
        {coupons.map((coupon: any) => {
          return <Box key={coupon?.coupon} {...coupon} />;
        })}
        {/* <Box heading='Total Rewards' value={13} />
      <Box heading='Rewards Redeemed' value={5} /> */}
      </div>
      <RewardModal />
      {confetti && (
        <Confetti
          width={width}
          height={height}
          //need to run this without stopping
          onConfettiComplete={() => setConfetti(false)}
        />
      )}
    </div>
  );
};

export default RewardSection;
