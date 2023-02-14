import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';

const LoginContainer = () => {
  return (
    <div className='grid min-h-screen grid-cols-2'>
      {/* <div className='h-full w-full bg-gray-200'></div> */}
      <img
        src='https://i.pinimg.com/564x/b7/ba/e3/b7bae3aa7d877dfeeab137e1bd1f1bdb.jpg'
        alt='ss'
        className='h-screen w-full object-cover'
      />
      <div className='flex w-full flex-col justify-center gap-4 px-20 pb-10'>
        <h1 className='mt-4 py-4 text-center text-3xl font-semibold'>
          Admin Login
        </h1>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <InputGroup size='lg'>
            {/* <InputLeftAddon children='+91' /> */}
            <Input
              type='text'
              placeholder='username'
              size='lg'
              variant='filled'
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup size='lg'>
            {/* <InputLeftAddon children='+91' /> */}
            <Input
              type='password'
              placeholder='password'
              size='lg'
              variant='filled'
            />
          </InputGroup>
        </FormControl>
        <Button colorScheme='teal' size='lg' py={8}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginContainer;
