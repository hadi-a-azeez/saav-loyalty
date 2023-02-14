//chakra ui modal import
import { supabase } from '@/lib/supabaseClient';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

interface ReviewModalProps {
  isOpen?: boolean;
  onCloseAction?: any;
}

const ReviewModal = ({ isOpen = false, onCloseAction }: ReviewModalProps) => {
  const [review, setReview] = useState('');
  const googleReviewLink = `https://search.google.com/local/writereview?placeid=ChIJ1cBJRXVDpjsR-T9PevNUzM4`;
  const toast = useToast();

  const onAddReview = async () => {
    if (review === '') {
      toast({
        title: 'Error',
        description: 'Please write a review before adding it to google',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    //check if the user is logged in or not in local storage
    const user = localStorage.getItem('user');
    let userId = '';
    if (user) {
      const userObj = JSON.parse(user);
      userId = userObj[0].id || '';
    }
    //create a unique id for the coupon code starting with the word REVIEW
    const coupon = 'REVIEW' + Math.random().toString(36).substr(2, 9);
    try {
      const { data, error } = await supabase
        .from('kardano-reviews')
        .insert({
          review,
          user_id: user ? userId : null,
          coupon,
          status: 'pending',
        })
        .select();
      if (error) {
        toast({
          title: 'Error',
          description: 'Something went wrong, please try again later',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      //save the review to local storage to be used in the coupon code modal
      localStorage.setItem('review', JSON.stringify(data));
      //copy the review to clipboard and show a toast message
      navigator.clipboard.writeText(review);
      toast({
        title: 'Review Copied',
        description: 'Your review has been copied to clipboard',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      onCloseAction();
    } catch (error) {
    } finally {
      window.open(googleReviewLink, '_blank');
    }
  };
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onCloseAction}
      //align content to the center of the screen
      placement='bottom'
    >
      <DrawerOverlay />
      <DrawerContent
        style={{
          borderRadius: '20px 20px 0 0',
          height: '50%',
        }}
      >
        <DrawerHeader>Add Review</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          {/* let the user type review in a text field and click on the add to google button, then copy the text and save it to database
          then open the google review link in a new tab and paste the review in the text field and click on the submit button */}
          <Textarea
            placeholder='Write your review here'
            className='border-1 h-40 w-full rounded-lg border-gray-700'
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Button mt='2' mb='2' onClick={onAddReview}>
            Add to Google
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ReviewModal;
