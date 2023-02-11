import Router from 'next/router';

interface SideBarProps {
  selected: string;
}

const SideBarRoutes = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/admin/dashboard',
  },
  {
    id: 1,
    name: 'Customers',
    path: '/admin/customers',
  },
  {
    id: 1,
    name: 'Coupons',
    path: '/admin/coupons',
  },
  {
    id: 1,
    name: 'Products',
    path: '/admin/products',
  },
  {
    id: 1,
    name: 'Reviews',
    path: '/admin/reviews',
  },
];

const SideBar = ({ selected = 'dashboard' }: SideBarProps) => {
  const Item = ({ selected = false, name = '', path = '' }) => {
    return (
      <div
        className={`${
          selected && 'bg-[#EEE8E8]'
        } flex cursor-pointer flex-row items-center rounded-lg px-4 py-3 hover:bg-[#EEE8E8]`}
        onClick={() => {
          Router.push(path);
        }}
      >
        <h1 className='font-semibold'>{name}</h1>
      </div>
    );
  };

  return (
    <div className='flex w-full flex-col items-center bg-[#FAF7F3] px-4 py-10 text-gray-800'>
      <h1 className='text-2xl font-semibold'>Saav</h1>
      <div className='mt-6 flex w-full flex-col gap-3 px-4'>
        {SideBarRoutes.map((item) => (
          <Item key={item.id} selected={selected === item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
