import SideBar from '@/components/SideBar';
import { Spin } from 'antd';

interface AdminLayoutProps {
  children: any;
  page: string;
  isLoading?: boolean;
}

const AdminLayout = ({ children, page, isLoading }: AdminLayoutProps) => {
  return (
    <div className='grid min-h-screen grid-cols-admin-layout'>
      <SideBar selected={page} />
      <div>
        {isLoading ? (
          <div className='flex h-screen w-full items-center justify-center'>
            <Spin />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default AdminLayout;
