interface BoxProps {
  heading: string;
  value: number;
}

const MetricsSection = () => {
  const Box = ({ heading = '', value = 0 }: BoxProps) => {
    return (
      <div className='flex w-[100%] flex-col gap-2 rounded-lg  border border-gray-300 px-3 py-5'>
        <h1 className='text-lg font-normal text-gray-400'>{heading}</h1>
        <h1 className='text-3xl font-bold text-gray-900'>{value}</h1>
      </div>
    );
  };

  return (
    <div className='mt-3 grid w-full grid-cols-2 gap-3 px-3'>
      <Box heading='Points' value={500} />
      <Box heading='Total Purchases' value={5} />
      <Box heading='Total Rewards' value={13} />
      <Box heading='Rewards Redeemed' value={5} />
    </div>
  );
};

export default MetricsSection;
