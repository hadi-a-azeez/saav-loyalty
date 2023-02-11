import SideBar from '@/components/SideBar';

interface AdminLayoutProps {
  children: any;
  page: string;
}

const AdminLayout = ({ children, page }: AdminLayoutProps) => {
  return (
    <div className='grid min-h-screen grid-cols-admin-layout'>
      <SideBar selected={page} />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
