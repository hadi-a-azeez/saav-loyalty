import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import Router from 'next/router';
import { useState } from 'react';

import { supabase } from '@/lib/supabaseClient';
import { coupons } from '@/lib/constants';

interface FormValues {
  [key: string]: any;
}

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ number: '', name: '' });

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
      const validationErrors = validateForm(
        formValues?.number,
        formValues?.name
      );
      setErrors(validationErrors);
      if (validationErrors.number || validationErrors.name) {
        throw 'validation error';
      }
      const { data, error } = await supabase
        .from('kardano-users')
        .insert({ ...formValues, number: parseInt(formValues.number) })
        .select();
      localStorage.setItem('user', JSON.stringify(data));
      //add a registration coupon to the user in kardano-coupons table, select a random coupon.coupon from the list
      const couponforuser = coupons[Math.floor(Math.random() * coupons.length)];
      const { data: couponData, error: couponError } = await supabase
        .from('kardano-coupons')
        .insert({
          user_id: data && data[0].id,
          coupon: couponforuser.coupon,
          campaign: 'REGISTRATION',
          coupon_description: couponforuser.description,
          status: 'ACTIVE',
        });
      sendTxtMessage();
      Router.push('/dashboard');
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  const sendTxtMessage = async () => {
    let message = `Hi ${formValues?.name}, Thank you for registering with Kardano clothing. Login to your account to avail your registration coupon using your mobile number. https://kardano.netlify.app/login`;
    let heroku = 'https://abony-backend.herokuapp.com';
    fetch(
      `${heroku}/send-text/?recipient=91${formValues?.number}&textmessage=${message}`
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const validateForm = (number: string, name: string) => {
    const errors: { number: string; name: string } = { number: '', name: '' };
    if (!number) {
      errors.number = 'Number is required';
    }
    //phone number validation, only numbers allowed, max 10 digits, min 10 digits
    if (number && !/^[0-9]{10}$/.test(number)) {
      errors.number = 'Please enter a valid number';
    }
    if (!name) {
      errors.name = 'Name is required';
    }
    return errors;
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
        {errors.name && (
          <FormHelperText color='red.400'>Please enter name</FormHelperText>
        )}
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
          //phone number validation, only numbers allowed, max 10 digits, min 10 digits
          pattern='[0-9]{10}'
        />
        {errors.number && (
          <FormHelperText color='red.400'>
            Please enter whatsapp number
          </FormHelperText>
        )}
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
