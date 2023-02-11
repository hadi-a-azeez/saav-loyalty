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
      <div className='h-full w-full bg-gray-200'></div>
      <div className='flex w-full flex-col justify-center gap-4 px-20 pb-10'>
        <h1 className='mt-4 py-4 text-center text-3xl font-semibold'>
          Exclusive Rewards For Members
        </h1>
        <FormControl>
          <FormLabel>Whatsapp Number</FormLabel>
          <InputGroup size='lg'>
            {/* <InputLeftAddon children='+91' /> */}
            <Input
              type='tel'
              placeholder='phone number'
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
