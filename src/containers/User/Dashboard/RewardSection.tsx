interface BoxProps {
  heading: string;
  value: number;
}

const RewardSection = () => {
  const Box = ({ heading = '', value = 0 }: BoxProps) => {
    return (
      <div className='flex w-[100%] flex-col gap-2 rounded-lg  border border-gray-300 px-3 py-5'>
        <h1 className='text-lg font-normal text-gray-900'>{heading}</h1>
        {/* <h1 className='text-3xl font-bold text-gray-900'>{value}</h1> */}
      </div>
    );
  };

  return (
    <div className='mt-4 w-full px-3'>
      <h1 className='text-lg font-semibold'>Rewards</h1>
      <div className='mt-3 grid w-full grid-cols-2 gap-3'>
        <Box heading='10% Discount' value={500} />
        <Box heading='20% Discount' value={5} />
        {/* <Box heading='Total Rewards' value={13} />
      <Box heading='Rewards Redeemed' value={5} /> */}
      </div>
    </div>
  );
};

export default RewardSection;
