import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Router from 'next/router';
import { useState } from 'react';

import { supabase } from '@/lib/supabaseClient';

interface FormValues {
  [key: string]: any;
}

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    formValues: FormValues
  ) => {
    const { name, value } = event.target;
    return {
      ...formValues,
      [name]: value,
    };
  };

  const handleRegisterClick = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('kardano-users')
        .insert({ ...formValues, number: parseInt(formValues.number) });
      // const result = await supabase.auth.signUp({
      //   phone: '+971554756473',
      //   password: 'some-password',
      // });
      // console.log(result);
      // if (data) {
      //   const result = await supabase.auth.signUp({
      //     phone: '+13334445555',
      //     password: 'some-password',
      //   });
      //   console.log(result);
      // }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
      Router.push('/dashboard');
    }
  };

  return (
    <div className='flex w-full flex-col gap-4 px-4'>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type='text'
          size='lg'
          variant='filled'
          name='name'
          value={formValues.name || ''}
          onChange={(event) =>
            setFormValues(handleInputChange(event, formValues))
          }
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Whatsapp Number</FormLabel>
        <Input
          type='text'
          size='lg'
          variant='filled'
          name='number'
          value={parseInt(formValues.number || '') || ''}
          onChange={(event) =>
            setFormValues(handleInputChange(event, formValues))
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Place</FormLabel>
        <Input
          type='text'
          size='lg'
          variant='filled'
          name='place'
          value={formValues.place || ''}
          onChange={(event) =>
            setFormValues(handleInputChange(event, formValues))
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Dob</FormLabel>
        <Input
          type='date'
          size='lg'
          variant='filled'
          name='dob'
          value={formValues.dob || ''}
          onChange={(event) =>
            setFormValues(handleInputChange(event, formValues))
          }
        />
      </FormControl>

      <div className='flex flex-col gap-1'>
        <div className='flex flex-row gap-2'>
          <FormControl>
            <FormLabel>Pant Size</FormLabel>
            <Input
              type='text'
              size='lg'
              variant='filled'
              name='pant_size'
              value={formValues.pant_size || ''}
              onChange={(event) =>
                setFormValues(handleInputChange(event, formValues))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Shirt Size</FormLabel>
            <Input
              type='text'
              size='lg'
              variant='filled'
              name='shirt_size'
              value={formValues.shirt_size || ''}
              onChange={(event) =>
                setFormValues(handleInputChange(event, formValues))
              }
            />
          </FormControl>
        </div>
      </div>
      <Button
        colorScheme='teal'
        size='lg'
        py={8}
        onClick={handleRegisterClick}
        isLoading={loading}
      >
        Register
      </Button>
    </div>
  );
};

export default Form;
