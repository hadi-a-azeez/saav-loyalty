import { Table, Button } from 'antd';
import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabaseClient';

import AdminLayout from '@/components/layout/Admin';

import { modelCustomersData } from '@/models/admin/customers';
import FilterDrawer from '@/containers/Admin/Customers/FilterDrawer';
import AddNewUserDrawer from '@/containers/Admin/Customers/AddNewUserDrawer';
//xlsx
import * as XLSX from 'xlsx';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Pant size',
    dataIndex: 'pant_size',
    key: 'pant_size',
  },
  {
    title: 'Shirt size',
    dataIndex: 'shirt_size',
    key: 'shirt_size',
  },
];

const CustomersContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [addUserDrawerVisible, setAddUserDrawerVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.from('kardano-users').select();
      if (error) {
        console.log(error);
      }
      if (data) {
        setUsersData(modelCustomersData(data));
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const onExport = () => {
    //export usersData to csv
    const ws = XLSX.utils.json_to_sheet(usersData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    XLSX.writeFile(wb, 'sheetjs.xlsx');
  };

  return (
    <AdminLayout page='Customers' isLoading={isLoading}>
      <div className='flex w-full flex-col px-8 py-10'>
        <div className='flex w-full justify-between'>
          <h1 className='text-2xl font-semibold text-black'>Customers</h1>
          <div className='flex gap-2'>
            <Button onClick={() => setAddUserDrawerVisible(true)}>
              Add User
            </Button>
            <Button onClick={onExport}>Export</Button>
            <Button onClick={() => setVisible(true)}>Filter</Button>
          </div>
        </div>
        <div className='mt-4 flex w-full flex-col'>
          <Table dataSource={usersData} columns={columns} />
        </div>
      </div>
      <FilterDrawer visible={visible} onClose={() => setVisible(false)} />
      <AddNewUserDrawer
        visible={addUserDrawerVisible}
        onClose={() => setAddUserDrawerVisible(false)}
      />
    </AdminLayout>
  );
};

export default CustomersContainer;
