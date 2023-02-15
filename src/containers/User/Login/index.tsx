import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabaseClient';

import Header from '@/components/UserHeader';
const LoginContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      Router.push('/dashboard');
    }
  }, []);

  const onLoginClick = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('kardano-users')
        .select()
        .eq('number', phoneNumber);
      if (data?.length) {
        setError('');
        localStorage.setItem('user', JSON.stringify(data));
        Router.push('/dashboard');
      } else {
        setError('Number not registered, Please Register first.');
      }
    } catch (error) {
      setError('Something went wrong! Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {/* <div className='h-[270px] w-full bg-gray-400'></div> */}
      <img
        src='https://i.pinimg.com/564x/ee/52/61/ee526172fa69b9e19c5af9ddf1431b3b.jpg'
        alt='ss'
        className='h-[270px] w-full object-cover'
      />
      <div className='flex w-full flex-col gap-4 px-4 pb-10 md:px-20'>
        <h1 className='mt-4 py-4 text-center text-3xl font-semibold'>
          Exclusive Rewards For Members
        </h1>
        {error.length ? (
          <Box bg='tomato' w='100%' p={4} color='white'>
            {error}
          </Box>
        ) : (
          <></>
        )}
        <FormControl>
          <FormLabel>Whatsapp Number</FormLabel>
          <InputGroup size='lg'>
            {/* <InputLeftAddon children='+91' /> */}
            <Input
              type='tel'
              placeholder='phone number'
              size='lg'
              variant='filled'
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </InputGroup>
        </FormControl>
        <Button
          colorScheme='teal'
          size='lg'
          py={8}
          onClick={onLoginClick}
          isLoading={loading}
        >
          Login
        </Button>
        <h1 className=' mb-6 self-start text-lg text-gray-600'>
          Not a member?{' '}
          <span
            className='cursor-pointer text-blue-600'
            onClick={() => {
              Router.push('/register');
            }}
          >
            Register
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LoginContainer;
