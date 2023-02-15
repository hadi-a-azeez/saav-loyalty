interface LinkProps {
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const Link = ({ title, onClick, icon }: LinkProps) => {
  return (
    <div
      className='flex w-full cursor-pointer flex-row items-center gap-4 rounded-lg border border-gray-300 px-3 py-2'
      onClick={onClick}
    >
      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'>
        {icon}
      </div>
      <h1 className=' text-sm font-semibold text-gray-600'>{title}</h1>
    </div>
  );
};

export default Link;
